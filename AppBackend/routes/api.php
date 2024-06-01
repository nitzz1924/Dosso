<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller(AuthController::class)->group(function () {
    Route::post('studentlogin', 'studentlogin');
    Route::post('studentregister', 'studentregister');
    Route::post('checkDuplicate', 'checkDuplicate');
    Route::post('validateCredentials', 'validateCredentials');
    Route::get('studentedit/{id}', 'studentedit');
    Route::put('updatestudent/{id}', 'updatestudent');
    Route::get('showcontests', 'showcontests');
    Route::post('insertwallet', 'insertwallet');
    Route::get('transactionlist/{id}', 'transactionlist');
    Route::get('walletamount/{id}', 'walletamount');
    Route::get('getPoint/{studentId}/{contestId}', 'getPoint');
    Route::post('addPoint', 'addPoint');
    Route::post('createbalancesheet', 'createbalancesheet');
    Route::post('createuserspin', 'createuserspin');
    Route::get('viewwinzone', 'viewwinzone');
    Route::get('getpoints/{id}', 'getpoints');
    Route::post('InsertLastSpin', 'InsertLastSpin');
    Route::get('studentlogout', 'studentlogout');
    Route::get('mycontests/{id}', 'mycontests');
    Route::post('insertkyc', 'insertkyc');
    Route::get('showkycstatus/{id}', 'showkycstatus');
    Route::post('paymentRequest', 'paymentRequest');
    Route::get('countplaycontests/{id}', 'countplaycontests');
    Route::post('phonepe-payment', 'handlePayment');
    Route::get('getallnortifications', 'getallnortifications');
    Route::post('createOrder', 'createOrder');
    Route::post('walletrecharge', 'walletrecharge');
    Route::get('getimagesadd', 'getimagesadd');
    Route::post('verifyotp', 'verifyotp');
    Route::post('changepassword', 'changepassword');
});
Route::get('/api/showcontests', 'ViewController@addcontestview');
