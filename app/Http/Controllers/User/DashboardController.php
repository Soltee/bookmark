<?php
namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;

use Auth;

class DashboardController extends Controller
{

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('verified');
	}

	/*Inertia : Home Page*/
	public function index()
	{
		return Inertia::render('User/Home', [
        	
        	]);
	}
}