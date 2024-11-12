<?php

namespace App\Http\Controllers;

use App\Models\Adm;
use App\Models\User;
use Illuminate\Http\Request;

class AdmController extends Controller
{
    // Lista todos os administradores
    public function index()
    {
        $admins = Adm::with('user')->get();
        return response()->json($admins);
    }

    // Cria um novo administrador
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        // Cria o usuário
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        // Cria o administrador associado
        $admin = Adm::create(['user_id' => $user->id]);

        return response()->json(['message' => 'Administrador criado com sucesso', 'admin' => $admin], 201);
    }
}
