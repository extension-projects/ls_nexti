<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    // Lista todas as categorias
    public function index()
    {
        $categorias = Categoria::all();
        return response()->json($categorias);
    }

    // Cria uma nova categoria
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'nullable|string',
        ]);

        $categoria = Categoria::create($validatedData);

        return response()->json(['message' => 'Categoria criada com sucesso', 'categoria' => $categoria], 201);
    }

    // Exibe uma categoria específica
    public function show($id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrada'], 404);
        }

        return response()->json($categoria);
    }

    // Atualiza uma categoria existente
    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrada'], 404);
        }

        $validatedData = $request->validate([
            'nome' => 'sometimes|required|string|max:255',
            'descricao' => 'nullable|string',
        ]);

        $categoria->update($validatedData);

        return response()->json(['message' => 'Categoria atualizada com sucesso', 'categoria' => $categoria]);
    }

    // Exclui uma categoria
    public function destroy($id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrada'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoria excluída com sucesso']);
    }
}
