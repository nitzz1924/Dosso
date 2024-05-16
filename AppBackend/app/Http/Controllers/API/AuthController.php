<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AddContest;
use App\Models\AdminVendors;
use App\Models\Wallet;
use App\Models\Point;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Students;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Str;
class AuthController extends Controller
{
   public function studentregister(Request $request)
{
    $validatedData = $request->validate([
            'username' => 'required|string|unique:students',
            'emailaddress' => 'required|email|unique:students',
            'password' => 'required|string|min:6',
            'contactnumber' => 'required|string|unique:students',
            'referbyId' => 'required|string',
            'status' => 'required|numeric',
        ]);

        $input = $request->all();
    $input['password'] = bcrypt($input['password']);
    $student = Students::create($input);


        return response()->json(['message' => 'Student registered successfully', 'data' => $student], 201);
}


protected function generateToken($student)
{
    // Generate a random token
    $token = Str::random(60);

    // Store the token in the session for the authenticated student
    Session::put('student_token_' . $student->id, $token);

    return $token;
}
    public function studentlogin(Request $request)
    {
        $credentials = $request->only('username', 'password');
        if (Auth::guard('students')->attempt($credentials)) {
            $student = Auth::guard('students')->user();
            $response = [
                'success' => true,
                'data' => $student,
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
        $contestdata = AddContest::get();
        return response()->json($contestdata);
    }

    public function insertwallet(Request $request)
    {
        $walletdata = new Wallet();
        $walletdata->userid = $request->input('userid');
        $walletdata->transactionid = $request->input('transactionid');
        $walletdata->credit = $request->input('credit');
        $walletdata->debit = $request->input('debit');
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
        $creditTotal = Wallet::where('userid', $id)->sum('credit');
        $debitTotal = Wallet::where('userid', $id)->sum('debit');

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
                'data' => $walletamount,
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
        return response()->json($pointdata,200);
    }


}
