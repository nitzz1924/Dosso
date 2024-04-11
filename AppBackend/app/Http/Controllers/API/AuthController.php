<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AddContest;
use App\Models\AdminVendors;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use App\Models\Students;
use Auth;

class AuthController extends Controller
{
    public function studentregister(Request $request)
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
        $student = Students::create($input);

        //Generating API Token in PlainText Format
        $success['token'] = $student->createToken('MyApp')->plainTextToken;
        //Getting User Name from user table
        $success['tabledata'] = $student;

        $response = [
            'success' => true,
            'data' => $success,
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
            $success['name'] = $student->username;

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
        $contestdata = AddContest::get();
        return response()->json($contestdata);
    }
}
