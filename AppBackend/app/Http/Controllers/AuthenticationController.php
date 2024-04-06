<?php

namespace App\Http\Controllers;

use App\Models\AdminVendors;
use Illuminate\Http\Request;
use Auth;
class AuthenticationController extends Controller
{
    public function loginvendor(Request $request)
    {
        // dd($request->vendoremail);
        $credentials = $request->only('emailaddress', 'password');
        $data = AdminVendors::where('emailaddress', $credentials)->get();

        if ($data && Auth::guard('vendors')->attempt($credentials)) {
            return redirect()->route('vendordashboardview');
        }
        return redirect()->route('vendorloginview')->with('error', 'Invalid credentials');
    }

    public function logoutvendor()
    {
        \Session::flush();
        Auth::guard('vendors')->logout();
        return redirect()->route('vendorloginview');
    }

}
