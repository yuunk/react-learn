<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tweet;

class TweetController extends Controller
{
    //
    public function index()
    {
        $tweets =  Tweet::all();
        return $tweets->toArray();
    }
}
