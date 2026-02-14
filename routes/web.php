<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:Super Admin,Admin')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });

    Route::resource('users', UserController::class);
    Route::resource('shops', ShopController::class);
    Route::resource('tables', TableController::class);
    Route::resource('categories', CategoryController::class);
});

require __DIR__ . '/settings.php';
