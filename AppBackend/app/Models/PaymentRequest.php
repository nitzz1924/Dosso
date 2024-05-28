<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Students;
use App\Models\AddContest;
class PaymentRequest extends Model
{
    protected $fillable = ['id','contestid','userid','amount','rank','message','status', "playcontestid"];

    public function student()
    {
        return $this->belongsTo(Students::class, 'students.id');
    }

    public function contest()
    {
        return $this->belongsTo(AddContest::class, 'add_contests.id');
    }
}
