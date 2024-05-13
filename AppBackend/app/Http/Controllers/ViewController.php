<?php
#{{---------------------------------------------------🔱JAI SHREE MAHAKAAL🔱-----------------------------------------------------------------}}
namespace App\Http\Controllers;

use App\Models\AddContest;
use App\Models\AddShow;
use App\Models\AdminVendors;
use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ViewController extends Controller
{
    public function viewmaster()
    {
        return view('Admin.master');
    }
    public function adminprofile()
    {
        return view('Admin.adminprofile');
    }
    public function addcontestview()
    {
        $contestdata = AddContest::get();
        return view('Others.addcontest',compact('contestdata'));

        // // Fetch data from API endpoint
        // $response = Http::get('https://dummyjson.com/products/1');
        // dd($response->body(), $response->status());
        // if ($response->successful()) {
        //     $contestdata = $response->json();
        //     return view('Others.addcontest')->with('contestdata', $contestdata);
        // } else {
        //     return back()->withError('Failed to fetch data from API');
        // }
    }
    public function studentslist()
    {
        $studentdata = Students::get();
        return view('Students.studentslist',compact('studentdata'));
    }
    public function addvendorview()
    {
        $vendordata = AdminVendors::get();
        return view('VendorsAdmin.createvendor', compact('vendordata'));
    }
    public function adshowview()
    {
        $addshowdata = AddShow::get();
        return view('Others.adshow', compact('addshowdata'));
    }

    //Vendor Panel
    public function vendordashboardview()
    {
        if (Auth::guard('vendors')->check()) {   //
            return view('layouts.VendorPanel.vendordashboard');
        } else {
            return redirect()->route('vendorloginview');
        }
    }

    public function vendorloginview()
    {
        return view('auth.VendorAuth.vendorlogin');
    }
    public function vendorprofile()
    {
        if (Auth::guard('vendors')->check()) {
            return view('layouts.VendorPanel.vendorprofile');
        } else {
            return redirect()->route('vendorloginview');
        }
    }
    public function studentslistvendor()
    {
        if (Auth::guard('vendors')->check()) {
            return view('layouts.VendorPanel.studentslist');
        } else {
            return redirect()->route('vendorloginview');
        }
    }
}
