<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController 
{

	/*Welcome Page*/
	public function index()
	{
		return view('welcome');
	}
}
