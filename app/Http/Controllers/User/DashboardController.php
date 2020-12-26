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

		$bookmarks = Auth::user()
                            ->bookmarks()
                            ->latest()
                            ->take(5)
                            ->get();
		return Inertia::render('User/Home', [
        		'bookmarks'     => $bookmarks
        	]);
	}
}