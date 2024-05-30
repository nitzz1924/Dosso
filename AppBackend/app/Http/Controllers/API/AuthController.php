<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AddContest;
use App\Models\AdminVendors;
use App\Models\BalanceSheet;
use App\Models\ContestSpin;
use App\Models\Kyc;
use App\Models\PlayContest;
use App\Models\PlayerSpin;
use App\Models\PaymentRequest;
use App\Models\Wallet;
use App\Models\Point;
use App\Models\Nortification;
use App\Models\Winzone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Students;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use GuzzleHttp\Exception\RequestException;
class AuthController extends Controller
{
    public function studentregister(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'emailaddress' => 'required|email|unique:students',
            'password' => 'required',
            'contactnumber' => 'required|unique:students',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors(),
                'requestdata' => $request->all()
            ];
            return response()->json($response, 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $student = Students::create($input);

        $response = [
            'success' => true,
            'data' => $student,
            'message' => 'Student Registered Successfully..!!!!!'
        ];
        return response()->json($response, 200);
    }

    public function checkDuplicate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'emailaddress' => 'required|email',
            'contactnumber' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 400);
        }

        $emailExists = Students::where('emailaddress', $request->emailaddress)->exists();
        $contactnumberExists = Students::where('contactnumber', $request->contactnumber)->exists();

        return response()->json([
            'success' => true,
            'emailExists' => $emailExists,
            'contactnumberExists' => $contactnumberExists,
        ]);
    }

    public function validateCredentials(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|numeric',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()], 400);
        }

        $user = Students::where('contactnumber', $request->username)
                        ->where('password', bcrypt($request->password))
                        ->first();

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'Invalid mobile number or password'], 401);
        }

        return response()->json(['success' => true, 'message' => 'Credentials validated successfully']);
    }



    public function studentlogin(Request $request)
    {
        $credentials = $request->only('username', 'password');
        if (Auth::guard('students')->attempt($credentials)) {
            $student = Auth::guard('students')->user();
            $success['token'] = $student->createToken('MyApp')->plainTextToken;
            $success['data'] = $student;

            $response = [
                'success' => true,
                'data' => $success,
                'message' => 'Student Login Successfully..!!!!!'
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                'success' => false,
                'message' => 'Unauthorized!'
            ];
            return response()->json($response, 401);
        }
    }
    public function studentedit($id)
    {
        $studentdata = Students::find($id);
        if ($studentdata) {
            return response()->json([
                'success' => 200,
                'data' => $studentdata,
                'message' => 'Looks Fine.!!!'
            ], 200);
        } else {
            return response()->json([
                'success' => 404,
                'data' => $studentdata,
                'message' => 'There is some error.!!!'
            ], 404);
        }
    }

    public function updatestudent(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'emailaddress' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $student = Students::find($id);
        $student->update($input);

        $success['token'] = $student->createToken('MyApp')->plainTextToken;
        $success['tabledata'] = $student;

        $response = [
            'success' => true,
            'data' => $success,
            'message' => 'Student Edited.!!!!!!!'
        ];
        return response()->json($response, 200);
    }

    public function showcontests(Request $request)
    {
        $contests = AddContest::withCount('playContests')->get();
        return response()->json($contests);
    }

    public function insertwallet(Request $request)
    {
        // Insert into the wallet table
        $walletdata = new Wallet();
        $walletdata->userid = $request->input('userid');
        $walletdata->transactionid = $request->input('transactionid');
        $walletdata->paymenttype = $request->input('paymenttype');
        $walletdata->amount = $request->input('amount');
        $walletdata->transactiontype = $request->input('transactiontype');
        $walletdata->status = 1;
        if ($walletdata->save()) {
            // Insert into the play_contest table
            $contestdata = new PlayContest();
            $contestdata->studentid = $request->input('userid');
            $contestdata->contestid = $request->input('contestid');
            $contestdata->rank = 0;
            $contestdata->winningprice = 0;
            $contestdata->conteststatus = 1;

            if ($contestdata->save()) {
                return response()->json(['success' => true, 'data' => $contestdata]);
            } else {
                // If the second insertion fails, delete the first insertion to maintain data integrity
                $walletdata->delete();
                return response()->json(['success' => false, 'message' => 'Failed to insert contest data.'], 500);
            }
        } else {
            return response()->json(['success' => false, 'message' => 'Failed to insert wallet data.'], 500);
        }
    }

    public function transactionlist($id)
    {
        $walletdata = Wallet::where('userid', $id)->get();
        $response = [
            'message' => 'Here is your Transaction List...',
            'success' => true,
            'data' => $walletdata,
        ];
        return response()->json($response, 200);
    }
    public function walletamount($id)
    {
        $creditTotal = Wallet::where('userid', $id)->where('paymenttype', 'credit')->sum('amount');
        $debitTotal = Wallet::where('userid', $id)->where('paymenttype', 'debit')->sum('amount');
        $transaction = Wallet::where('userid', $id)->get();
        $debithistory = Wallet::where('userid', $id)->where('paymenttype', 'debit')->get();
        $dateFormat = 'd-m-Y';
        foreach ($transaction as $all) {
            $all->created_date = Carbon::parse($all->created_at)->format($dateFormat);
        }
        foreach ($debithistory as $debit) {
            $debit->created_date = Carbon::parse($debit->created_at)->format($dateFormat);
        }
        $credithistory = Wallet::where('userid', $id)->where('paymenttype', 'credit')->get();
        foreach ($credithistory as $credit) {
            $credit->created_date = Carbon::parse($credit->created_at)->format($dateFormat);
        }
        $walletamount = $creditTotal - $debitTotal;

        if ($creditTotal == 0 && $debitTotal == 0) {
            $response = [
                'message' => 'transaction not Found',
                'success' => true,
                'data' => 0,
            ];
        } else {
            $response = [
                'message' => 'Your Wallet Amount.',
                'success' => true,
                'walletamount' => $walletamount,
                'transaction' => $transaction,
                'debithistory' => $debithistory,
                'credithistory' => $credithistory,
            ];
        }

        return response()->json($response, 200);
    }
    public function getPoint($studentId, $contestId)
    {
        $resultData = Point::whereRaw('contestId = ? and studentId = ?', [$contestId, $studentId])->get();
        //dd($resultData);
        $response = [
            'message' => 'Here is your Point List List...',
            'success' => true,
            'data' => $resultData,
        ];
        return response()->json($response, 200);
    }

    public function addPoint(Request $request)
    {
        $pointdata = new Point();
        $pointdata->point = $request->input('point');
        $pointdata->studentId = $request->input('studentId');
        $pointdata->contestId = $request->input('contestId');
        $pointdata->save();
        return response()->json($pointdata, 200);
    }
    public function createbalancesheet(Request $request)
    {
        $balancesheetdata = new BalanceSheet();
        $balancesheetdata->contestid = $request->input('contestid');
        $balancesheetdata->userid = $request->input('userid');
        $balancesheetdata->username = $request->input('username');
        $balancesheetdata->date = $request->input('date');
        $balancesheetdata->amount = $request->input('amount');
        $balancesheetdata->paymode = $request->input('paymode');
        $balancesheetdata->paymentid = $request->input('paymentid');
        $balancesheetdata->save();
        $response = [
            'success' => true,
            'data' => $balancesheetdata,
            'message' => "Contest Balance Sheet Added...!!!!!!!!!",
        ];
        return response()->json($response, 200);
    }
    public function createuserspin(Request $request)
    {
        $contestuserspindata = new ContestSpin();
        $contestuserspindata->contestid = $request->input('contestid');
        $contestuserspindata->userid = $request->input('userid');
        $contestuserspindata->spin = $request->input('spin');
        $contestuserspindata->spindur = $request->input('spindur');
        $contestuserspindata->save();
        $response = [
            'success' => true,
            'data' => $contestuserspindata,
            'message' => "Contest User Spins Added...!!!!!!!!!",
        ];
        return response()->json($response, 200);
    }

    public function viewwinzone(Request $request)
    {
        $winzondata = Winzone::orderBy('start', 'asc')->get();
        return response()->json($winzondata);
    }
    public function getpoints($id)
    {
        $rankingdata = Point::join('students', 'points.studentId', '=', 'students.id')
            ->select('students.studentname', 'students.studentprofile', 'points.*')
            ->where('points.contestid', $id)
            ->orderBy('points.point', 'desc')
            ->get();
        return response()->json($rankingdata);
    }

    public function InsertLastSpin(Request $request)
    {
        $playerspindata = new Point();
        $playerspindata->studentid = $request->input('studentid');
        $playerspindata->contestid = $request->input('contestid');
        $playerspindata->point = $request->input('point');
        $playerspindata->save();
        $response = [
            'success' => true,
            'data' => $playerspindata,
            'message' => "Spins Added...!!!!!!!!!",
        ];

        $conteststatus = PlayContest::find($request->playcontestid);
        $conteststatus->update([
            'conteststatus' => '2',
        ]);
        return response()->json($response, 200);
    }

    public function studentlogout(Request $request)
    {
        Auth::guard('students')->logout();

        return response()->json(['message' => 'Successfully logged out', 'success' => true]);
    }

    public function mycontests($id)
    {
        $historydata = PlayContest::join('add_contests AS ac', 'play_contests.contestid', '=', 'ac.id')
        ->leftJoin('payment_requests AS pr', 'play_contests.id', '=', 'pr.playcontestid')
        ->select(
            'ac.*',
            'play_contests.conteststatus AS playconteststatus',
            'play_contests.rank AS contestrank',
            'play_contests.winningprice AS contestwinprice',
            'play_contests.id AS playcontestid',
            'pr.playcontestid AS prid',
            'pr.id AS paymentrequestid'
        )
        ->where('play_contests.studentid', $id)
        ->get();
        return response()->json($historydata);
    }

    public function insertkyc(Request $req)
    {
        $kycdata = new Kyc();
        $kycdata->studentid = $req->input('studentid');
        $kycdata->studentimg = $req->input('studentimg');
        $kycdata->playerid = $req->input('playerid');
        $kycdata->aadhaar = $req->input('aadhaar');
        $kycdata->pannumber = $req->input('pannumber');
        $kycdata->gstnumber = $req->input('gstnumber');
        $kycdata->accnumber = $req->input('accnumber');
        $kycdata->ifsccode = $req->input('ifsccode');
        $kycdata->playertype = $req->input('playerType');
        $kycdata->accname = $req->input('accname');
        $kycdata->aadhaarimg = $req->input('aadhaarimg');
        $kycdata->panimg = $req->input('panimg');
        $kycdata->status = 1;

        // Handling multiple Images of Students
        if ($req->hasfile('studentimg')) {
            $studentImages = [];
            foreach ($req->file('studentimg') as $file) {
                $imageName = md5(rand(1000, 10000)) . '.' . strtolower($file->getClientOriginalExtension());
                $file->move(public_path('uploads/kyc'), $imageName);
                $studentImages[] = 'uploads/kyc/' . $imageName;
            }
            $kycdata->studentimg = json_encode($studentImages);
        }
        // Handling multiple Images of AADHAR
        if ($req->hasfile('aadhaarimg')) {
            $aadharimages = [];
            foreach ($req->file('aadhaarimg') as $file) {
                $imageName = md5(rand(1000, 10000)) . '.' . strtolower($file->getClientOriginalExtension());
                $file->move(public_path('uploads/kyc'), $imageName);
                $aadharimages[] = 'uploads/kyc/' . $imageName;
            }
            $kycdata->aadhaarimg = json_encode($aadharimages);
        }
        // Handling multiple Images of PAN
        if ($req->hasfile('panimg')) {
            $panimages = [];
            foreach ($req->file('panimg') as $file) {
                $imageName = md5(rand(1000, 10000)) . '.' . strtolower($file->getClientOriginalExtension());
                $file->move(public_path('uploads/kyc'), $imageName);
                $panimages[] = 'uploads/kyc/' . $imageName;
            }
            $kycdata->panimg = json_encode($panimages);
        }
        $kycdata->save();
        $response = [
            'success' => true,
            'data' => $kycdata,
            'message' => "KYC Added...!!!!!!!!!",
        ];
        return response()->json($response, 200);
    }

    public function showkycstatus($id)
    {
        $status = Kyc::where('playerid', $id)->value('status');
        if ($status == 1) {
            return response()->json(['message' => 'KYC Verification Pending', 'color' => "'d-grid align-content-center alert alert-warning col-lg-3 justify-content-center'", 'status' => 0]);
        } elseif ($status == 2) {
            return response()->json(['message' => 'KYC Verified', 'color' => "'d-grid align-content-center alert alert-success col-lg-3 justify-content-center'", 'status' => 1]);
        } elseif ($status == 3) {
            return response()->json(['message' => 'The KYC application was declined due to insufficient documentation', 'color' => "'d-grid align-content-center alert alert-danger col-lg-3 justify-content-center'", 'status' => 2]);
        } else {
            return response()->json(['message' => 'To Rewithdraw Money Complete your KYC Process!', 'color' => "'d-grid align-content-center alert alert-info col-lg-3 justify-content-center'", 'status' => null]);
        }
    }
    public function paymentRequest(Request $request)
    {
        $payementreqdata = new PaymentRequest();
        $payementreqdata->playerId = $request->input('playerId');
        $payementreqdata->contestid = $request->input('contestid');
        $payementreqdata->amount = $request->input('amount');
        $payementreqdata->rank = $request->input('rank');
        $payementreqdata->playcontestid = $request->input('playcontestid');
        $payementreqdata->status = 1;
        $payementreqdata->save();
        return response()->json($payementreqdata, 200);
    }

    public function countplaycontests($id)
    {
        // Fetch the contest with the play contests count
        $contest = AddContest::where('id', $id)->withCount('ContestPoints')->first();

        // Check if the contest exists
        if (!$contest) {
            return response()->json([
                'message' => 'Contest not found.',
                'success' => false,
            ], 404);
        }

        // Fetch the win zones
        $winzones = Winzone::orderBy('start', 'asc')->get();

        // Check if the number of play contests is greater than or equal to the join members
        if ($contest->play_contests_count >= intval($contest->joinmembers)) {
            // Fetch play contests and order them by points descending
            $playcontests = Point::where('contestId', $id)->orderBy('point', 'desc')->get();

            // Update the ranks and winning prices
            foreach ($playcontests as $index => $data) {
                foreach ($winzones as $value) {
                    if ($index + 1 >= $value->start && $index + 1 <= $value->end) {
                        $playcontest = PlayContest::where('studentid', $data->studentId)
                            ->where('contestid', $id)
                            ->first();
                        if ($playcontest) {
                            $playcontest->update([
                                'rank' => $index + 1,
                                'winningprice' => $value->price,
                            ]);
                        }
                    }
                }
            }

            $response = [
                'message' => 'Contest has reached the required number of join members.',
                'success' => true,
            ];
        } else {
            $response = [
                'message' => 'Contest has not yet reached the required number of join members.',
                'success' => false,
            ];
        }

        return response()->json($response);
    }

    public function handlePayment(Request $request)
    {
        // Validate request input
        $validated = $request->validate([
            'initialAmount' => 'required|numeric|min:1',
        ]);

        $amount = $validated['initialAmount'];
        $redirectUrl = 'http://localhost:3000/addfund';

        $merchantId = env('PHONEPE_MERCHANT_ID');
        $saltKey = env('PHONEPE_SALT_KEY');

        // Ensure that environment variables are set
        if (!$merchantId || !$saltKey) {
            Log::error('Payment processing failed: Missing configuration for PHONEPE_MERCHANT_ID or PHONEPE_SALT_KEY.');
            return response()->json(['error' => 'Internal server error.'], 500);
        }

        $client = new Client();

        $payload = [
            'merchantId' => $merchantId,
            'amount' => $amount,
            'merchantTransactionId' => 'MT' . time(),
            'redirectUrl' => $redirectUrl,
            'redirectMode' => 'REDIRECT',
            'callbackUrl' => $redirectUrl,
            'mobileNumber' => '6375475956',
            'paymentInstrument' => [
                'type' => 'PAY_PAGE'
            ]
        ];

        // Calculate the X-VERIFY header
        $xVerifyHeader = $this->calculateXVerifyHeader($payload, $saltKey);

        try {
            $response = $client->post('https://api.phonepe.com/apis/hermes/pg/v1/pay', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'X-VERIFY' => $xVerifyHeader,
                ],
                'json' => $payload,
            ]);
            $responseBody = json_decode($response->getBody(), true);
            return response()->json($responseBody);
        } catch (Exception $e) {
            // Log the error and return an appropriate response
            Log::error('Payment processing failed: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function calculateXVerifyHeader($payload, $saltKey)
    {
        // Assuming this function is defined and generates the X-VERIFY header correctly
        // You should implement the actual logic here
        $data = json_encode($payload);
        return hash_hmac('sha256', $data, $saltKey);
    }

    public function getallnortifications()
    {
        $mesagedata = Nortification::get();
        $dateFormat = 'd-m-Y';
        foreach ($mesagedata as $all) {
            $all->created_date = Carbon::parse($all->created_at)->format($dateFormat);
        }
        return response()->json($mesagedata);
    }

    public function createOrder(Request $req)
    {

        $client = new Client();
        $url = 'https://api.razorpay.com/v1/orders';
        $apiKey = env('RAZORPAY_KEY');
        $apiSecret = env('RAZORPAY_SECRET');

        $data = [
            'amount' => (int)($req->amount * 100),
            'currency' => 'INR',
            'receipt' => '888888',
            'notes' => [
                'userid' => $req->playerId,
                'name' => $req->name,
                'mobileno' => $req->mobileno
            ]
        ];
        try {
            $response = $client->post($url, [
                'auth' => [$apiKey, $apiSecret],
                'json' => $data
            ]);

            $responseBody = json_decode($response->getBody(), true);
            return response()->json($responseBody);
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $responseBody = json_decode($e->getResponse()->getBody()->getContents(), true);
                return response()->json($responseBody, $e->getResponse()->getStatusCode());
            }

            return response()->json(['error' => 'An error occurred'], 500);
        }
    }
    public function walletrecharge(Request $request)
    {
        // Insert into the wallet table
        $walletdata = new Wallet();
        $walletdata->userid = $request->input('playerId');
        $walletdata->transactionid = $request->input('transactionid');
        $walletdata->paymenttype = $request->input('paymentType');
        $walletdata->amount = $request->input('amount');
        $walletdata->transactiontype = $request->input('transactiontype');
        if ($walletdata->save()) {
            return response()->json(['success' => true, 'data' => $walletdata]);
        } else {
            return response()->json(['success' => false, 'message' => 'Failed to insert wallet data.'], 500);
        }
    }
}
