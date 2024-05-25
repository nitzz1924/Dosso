<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    protected $fillable = ['id','point','studentId','contestId'];

    public function addContest()
      {
        return $this->belongsTo(AddContest::class, 'contestId');
      }
}
