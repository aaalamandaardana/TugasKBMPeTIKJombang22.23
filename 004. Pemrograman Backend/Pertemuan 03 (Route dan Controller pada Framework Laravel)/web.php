<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Pertemuan 3 Laravel 
// Anatomi Route 
// ***********************************
// ** Route::verb("/path", callback **
// ***********************************
// Penjelasan:
// • Facade Route
// • Verb merupakan HTTP verb, terdiri dari get, post, put, delete, options, patch.
// • Path Merupakan path URL setelah domain aplikasi kita yang kita izinkan untuk diakses oleh pengguna aplikasi.
// • Callback bisa berupa closure function atau Controller action yang ingin kita eksekusi ketika path tertentu diakses oleh pengguna aplikasi.

// Konsep Dasar Route dengan MVC pada Laravel
// 1. User mengakses aplikasi melalui route tertentu.
// 2. Route tersebut oleh aplikasi telah dipetakan ke controller action.
// 3. Controller action akan menggunakan model untuk mengakses data.
// 4. Model berinteraksi ke database untuk mendapatkan data atau menyimpan data.
// 5. Setelah berhasil mendapatkan data melalui model, controller akan mengembalikan sebuah view sekaligus data jika ada.
// 6. View tersebut pada akhirnya yang dilihat oleh user.

use App\Http\Controllers\MahasantriController;
use Illuminate\Support\Facades\Route;

use function PHPUnit\Framework\callback;

Route::get('/', function () {
    return view('welcome');
});

// Pertemuan 3
Route::get('/salam', function() {
    return "Assalaamu'alaykum Sobat, Selamat Belajar Laravel!";
});
Route::get('/mahasantri', [MahasantriController::class, 'index']);

// --------------------------------------------

// Pertemuan 4 
Route::get('/hello', function() {
    return view('hello', ['name' => 'Inaya']);
});
Route::get('/nilai', function() {
    return view('nilai');
});
Route::get('/daftarnilai', function() {
    return view('daftar_nilai');
});