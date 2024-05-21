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
use App\Models\Winzone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Students;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\DB;

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
        $walletdata = new Wallet();
        $walletdata->userid = $request->input('userid');
        $walletdata->transactionid = $request->input('transactionid');
        $walletdata->paymenttype = $request->input('paymenttype');
        $walletdata->amount = $request->input('amount');
        $walletdata->transactiontype = $request->input('transactiontype');
        $walletdata->save();
        return response()->json($walletdata);
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
        $credithistory = Wallet::where('userid', $id)->where('paymenttype', 'credit')->get();
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
            ->select('ac.*', 'play_contests.status AS playconteststatus', 'play_contests.rank AS contestrank', 'play_contests.winningprice AS contestwinprice')
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
        }elseif ($status == 3) {
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
        $payementreqdata->status = 1;
        $payementreqdata->save();
        return response()->json($payementreqdata, 200);
    }
}
