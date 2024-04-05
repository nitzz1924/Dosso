<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminVendors extends Model
{
    protected $fillable = ['id','vendorname','vendorprofile','schoolname','contactno','emailaddress','password','referidvendor','status'];
}
