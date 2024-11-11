<?php

namespace App\Http\Controllers;

use App\Models\Publicacao;
use Illuminate\Http\Request;

class PublicacaoController extends Controller
{
    public function store(Request $request)
    {
        // Validação dos dados
        $validatedData = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'doi' => 'nullable|string|max:255',
            'arquivo_publicacao' => 'nullable|file|mimes:pdf',
            'organizadores' => 'required|string|max:255',
            'link_compra' => 'nullable|string|max:255',
            'adm_id' => 'required|exists:adms,id',
        ]);

        // Salvando o arquivo de PDF, se houver
        if ($request->hasFile('arquivo_publicacao')) {
            $path = $request->file('arquivo_publicacao')->store('publicacoes');
            $validatedData['arquivo_publicacao'] = $path;
        }

        // Criando a publicação
        $publicacao = Publicacao::create($validatedData);

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Publicação criada com sucesso', 'publicacao' => $publicacao], 201);
    }
}
