<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\User\DashboardController;

Route::get('/', [WelcomeController::class, 'index'])
						->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () 
{
	// Route::get('/dashboard', function(){
		// return view('dashboard');
	// })->name('dashboard');
	Route::get('/dashboard', [DashboardController::class, 'index'])
								->name('dashboard');

});

require __DIR__.'/auth.php';
