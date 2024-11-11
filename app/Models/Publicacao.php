<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    use HasFactory;

    protected $table = 'publicacoes';

    protected $fillable = [
        'titulo',
        'descricao',
        'doi',
        'arquivo_publicacao',
        'organizadores',
        'link_compra',
        'adm_id',
    ];

    // Definindo o relacionamento many-to-many com Categoria
    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'categoria_publicacao', 'publicacao_id', 'categoria_id');
    }

    public function adm()
    {
        return $this->belongsTo(Adm::class);
    }
}
