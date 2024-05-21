<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kyc extends Model
{
    protected $fillable = ['id','studentid','studentimg','aadhaar','pannumber','gstnumber','accnumber','ifsccode','playertype','accname','aadhaarimg','panimg','status'];
}
