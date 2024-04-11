<?php
#{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller(AuthController::class)->group(function(){
    Route::post('studentlogin','studentlogin');
    Route::post('studentregister','studentregister');
    Route::get('studentedit/{id}','studentedit');
    Route::put('updatestudent/{id}','updatestudent');
    Route::get('showcontests','showcontests');

});

Route::get('/api/showcontests', 'ViewController@addcontestview');
