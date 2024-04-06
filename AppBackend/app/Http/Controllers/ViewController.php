<?php
#{{---------------------------------------------------🔱JAI SHREE MAHAKAAL🔱-----------------------------------------------------------------}}
namespace App\Http\Controllers;

use App\Models\AddContest;
use App\Models\AddShow;
use App\Models\AdminVendors;
use Illuminate\Http\Request;

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
    }
    public function studentslist()
    {
        return view('Students.studentslist');
    }
    public function addvendorview()
    {
        $vendordata = AdminVendors::get();
        return view('VendorsAdmin.createvendor',compact('vendordata'));
    }
    public function adshowview()
    {
        $addshowdata = AddShow::get();
        return view('Others.adshow',compact('addshowdata'));
    }

    //Vendor Panel
    public function vendordashboardview()
    {
        return view('layouts.VendorPanel.vendordashboard');
    }

    public function vendorloginview()
    {
        return view('auth.VendorAuth.vendorlogin');
    }
}
