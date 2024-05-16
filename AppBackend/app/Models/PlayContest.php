<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayContest extends Model
{
    protected $fillable = ['id','studentid','contestid','conteststatus','rank','winningprice','status'];
}
