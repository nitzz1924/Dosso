<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class AdminVendors extends Model implements Authenticatable
{
    use AuthenticableTrait;
    protected $fillable = ['id','vendorname','vendorprofile','schoolname','contactno','emailaddress','password','referidvendor','status'];
}
