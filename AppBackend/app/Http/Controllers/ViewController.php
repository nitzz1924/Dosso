<?php
#{{---------------------------------------------------🔱JAI SHREE MAHAKAAL🔱-----------------------------------------------------------------}}
namespace App\Http\Controllers;

use App\Models\AddContest;
use App\Models\AddShow;
use App\Models\AdminVendors;
use App\Models\BalanceSheet;
use App\Models\Kyc;
use App\Models\PaymentRequest;
use App\Models\PlayContest;
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
        $contestdata = AddContest::where('status', '!=', 2)->get();
        return view('Others.addcontest', compact('contestdata'));
    }
    public function studentslist()
    {
        $studentdata = Students::get();
        return view('Students.studentslist', compact('studentdata'));
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

    public function balanchesheet()
    {
        $contestdata = AddContest::get();
        return view('Others.balanchesheet',compact('contestdata'));
    }

    public function getcontestajax($id)
    {
        $contestdata = BalanceSheet::where('contestid',$id)->get();
        $totalAmount = $contestdata->sum('amount');
        $response = [
            'success' => true,
            'totalamount' => $totalAmount,
            'data' => $contestdata,
        ];
        return response()->json($response);
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

    public function winningreportview()
    {
        $contestdata = AddContest::where('status', '=', 2)->get();
        return view('Others.winningreport', compact('contestdata'));
    }

    public function reportpage(Request $request)
    {
        $contestdata = AddContest::find($request->id);
        $playdata = PlayContest::join('students','play_contests.studentid','students.id')
            ->select('students.studentname', 'play_contests.*')->where('contestid',$request->id)->orderBy('rank','desc')->get();
        return view('Others.report', compact('playdata','contestdata'));
    }

    public function kycrecords()
    {
        $kycdata = Kyc::get();
        return view('Others.kycrecords',compact('kycdata'));
    }
    public function paymentrequests()
{
    $paymentdata = PaymentRequest::select('payment_requests.*', 'students.studentname as studentname','students.contactnumber as contactnumber', 'add_contests.title as contest_title')
        ->join('students', 'payment_requests.playerId', '=', 'students.id')
        ->join('add_contests', 'payment_requests.contestid', '=', 'add_contests.id')
        ->paginate(10);
    // dd($paymentdata);
    return view('Others.paymentrequests', compact('paymentdata'));
}

}
