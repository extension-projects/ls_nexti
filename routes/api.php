<?php

use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\AdmController;
use Illuminate\Support\Facades\Route;

Route::post('/publicacoes', [PublicacaoController::class, 'store'])->name('publicacoes');

Route::get('/admins', [AdmController::class, 'index']);
Route::post('/admins', [AdmController::class, 'store']);

Route::get('/hello', function () {
    return 'Hello World';
});
