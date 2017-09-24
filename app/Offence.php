<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offence extends Model
{
    protected $fillable = [
    	'ic_passport',
    	'name',
    	'company_worked',
    	'offence_type'
    ];
}
