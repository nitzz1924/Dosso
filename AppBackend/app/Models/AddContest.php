<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlayContest;
use App\Models\PaymentRequest;
class AddContest extends Model
{
    protected $fillable = ['id','title','startdate','enddate','registrationfees','totalprice','totalspin','thumbnail','joinmembers','status'];
    public function playContests()
    {
        return $this->hasMany(PlayContest::class, 'contestid');
    }
    public function ContestPoints()
    {
        return $this->hasMany(Point::class, 'contestId');
    }

    public function paymentRequests()
    {
        return $this->hasMany(PaymentRequest::class, 'add_contests.id');
    }
}
