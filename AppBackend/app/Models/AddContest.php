<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlayContest;
class AddContest extends Model
{
    protected $fillable = ['id','title','startdate','enddate','registrationfees','totalprice','totalspin','thumbnail','joinmembers','status'];
    public function playContests()
    {
        return $this->hasMany(PlayContest::class, 'contestid');
    }
}
