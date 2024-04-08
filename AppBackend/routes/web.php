<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\AuthenticationController;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

//Admin Panel Routes
Route::get('/', function () {
    return view('welcome'); });

Route::post('/logoutuser', function () {
        Auth::logout();
        return redirect()->route('login');
    })->name('logoutuser');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('Admin.dashboard');
    })->name('dashboard');
});

// Admin Panel View Routes
Route::get('/viewmaster', [ViewController::class, 'viewmaster'])->name('viewmaster');
Route::get('/viewenquirylist', [ViewController::class, 'viewenquirylist'])->name('viewenquirylist');
Route::get('/adminprofile', [ViewController::class, 'adminprofile'])->name('adminprofile');
Route::get('/addcontestview', [ViewController::class, 'addcontestview'])->name('addcontestview');
Route::get('/studentslist', [ViewController::class, 'studentslist'])->name('studentslist');
Route::get('/addvendorview', [ViewController::class, 'addvendorview'])->name('addvendorview');
Route::get('/adshowview', [ViewController::class, 'adshowview'])->name('adshowview');

//Store Routes
Route::post('/createcontest', [StoreController::class, 'createcontest'])->name('createcontest');
Route::post('/createvendor', [StoreController::class, 'createvendor'])->name('createvendor');
Route::post('/createadshow', [StoreController::class, 'createadshow'])->name('createadshow');
Route::post('/createround', [StoreController::class, 'createround'])->name('createround');




//Authentication Routes
Route::post('/loginvendor', [AuthenticationController::class, 'loginvendor'])->name('loginvendor');
Route::get('/logoutvendor', [AuthenticationController::class, 'logoutvendor'])->name('logoutvendor');



// Vendor Panel View Routes
Route::get('/vendorloginview', [ViewController::class, 'vendorloginview'])->name('vendorloginview');
Route::get('/vendordashboardview', [ViewController::class, 'vendordashboardview'])->name('vendordashboardview');
Route::get('/vendorprofile', [ViewController::class, 'vendorprofile'])->name('vendorprofile');
Route::get('/studentslistvendor', [ViewController::class, 'studentslistvendor'])->name('studentslistvendor');

