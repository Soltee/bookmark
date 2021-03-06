<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\Helpers\HelperController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\BookmarkController;

Route::get('/', [WelcomeController::class, 'index'])
						->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () 
{

	Route::get('/dashboard', [DashboardController::class, 'index'])
								->name('dashboard');

	//Bookmark
	Route::get('/bookmarks', [BookmarkController::class, 'index'])
								->name('bookmarks');
	Route::get('/bookmarks/add', [BookmarkController::class, 'add'])
								->name('bookmarks.add');	
	Route::get('/bookmarks/{bookmark}', [BookmarkController::class, 'show'])
								->name('bookmarks.show');							
	Route::post('/bookmarks', [BookmarkController::class, 'store'])
								->name('bookmarks.store');
	Route::post('/bookmarks/make_active', [BookmarkController::class, 'make_active'])
								->name('bookmarks.active');

	Route::delete('/bookmarks/{bookmark}', [BookmarkController::class, 'destroy']);

	//Helpers
	Route::get('/bookmarks/redirect/{bookmark}', [BookmarkController::class, 'redirect'])
									->name('bookmark.redirect');

});

require __DIR__.'/auth.php';
