<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayerSpin extends Model
{
    protected $fillable = ['id','studentid','contestid','spinnumber','spinvalue','status'];
}
