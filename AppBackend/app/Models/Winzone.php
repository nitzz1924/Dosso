<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Winzone extends Model
{
    protected $fillable = [
        'start',
        'end',
        'title',
        'price',
        'status',
    ];
}
