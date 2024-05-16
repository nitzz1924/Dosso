<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestSpin extends Model
{
    protected $fillable = ['id','contestid','userid','spin','spindur','status'];
}
