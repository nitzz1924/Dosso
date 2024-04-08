<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreateRound extends Model
{
    protected $fillable = ['id','contestid','roundstage','totalspins','winners','wonby'];
}
