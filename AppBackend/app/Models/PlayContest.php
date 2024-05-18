<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\AddContest;
class PlayContest extends Model
{
      protected $fillable = ['id','studentid','contestid','conteststatus','rank','winningprice','status'];
      public function addContest()
      {
        return $this->belongsTo(AddContest::class, 'contestid');
      }
}
