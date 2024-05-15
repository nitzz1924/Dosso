<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BalanceSheet extends Model
{
    protected $fillable = ['id','contestid','userid','username','date','amount','paymode','paymentid','status'];
}
