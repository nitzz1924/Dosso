<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Authenticatable;
class Students extends Model implements Authenticatable
{
    use HasApiTokens;
    use AuthenticableTrait;
    protected $fillable = ['id','studentname','username','education','school_universityname','studentidimage','aadharcardnumber','aadharimage','contactnumber','emailaddress','city','state','pin','password','referbyId','studentprofile','status'];
}
