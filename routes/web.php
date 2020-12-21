<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    // return view('dashboard');

    return Inertia::render('Home/Index', [
        ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
