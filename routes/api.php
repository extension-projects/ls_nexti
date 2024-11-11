<?php

use App\Http\Controllers\PublicacaoController;
use Illuminate\Support\Facades\Route;

Route::post('/publicacoes', [PublicacaoController::class, 'store']);
