<?php

namespace App\Http\Controllers;

use App\Models\Chamada;
use Illuminate\Http\Request;

class ChamadaController extends Controller
{
    // Lista todas as chamadas
    public function index()
    {
        $chamadas = Chamada::all();
        return response()->json($chamadas);
    }

    // Cria uma nova chamada
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date|after_or_equal:data_inicio',
        ]);

        $chamada = Chamada::create($validatedData);

        return response()->json(['message' => 'Chamada criada com sucesso', 'chamada' => $chamada], 201);
    }

    // Exibe uma chamada específica
    public function show($id)
    {
        $chamada = Chamada::find($id);

        if (!$chamada) {
            return response()->json(['message' => 'Chamada não encontrada'], 404);
        }

        return response()->json($chamada);
    }

    // Atualiza uma chamada existente
    public function update(Request $request, $id)
    {
        $chamada = Chamada::find($id);

        if (!$chamada) {
            return response()->json(['message' => 'Chamada não encontrada'], 404);
        }

        $validatedData = $request->validate([
            'titulo' => 'sometimes|required|string|max:255',
            'descricao' => 'nullable|string',
            'data_inicio' => 'sometimes|required|date',
            'data_fim' => 'sometimes|required|date|after_or_equal:data_inicio',
        ]);

        $chamada->update($validatedData);

        return response()->json(['message' => 'Chamada atualizada com sucesso', 'chamada' => $chamada]);
    }

    // Exclui uma chamada
    public function destroy($id)
    {
        $chamada = Chamada::find($id);

        if (!$chamada) {
            return response()->json(['message' => 'Chamada não encontrada'], 404);
        }

        $chamada->delete();

        return response()->json(['message' => 'Chamada excluída com sucesso']);
    }
}
