<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';

    protected $fillable = [
        'nome_categoria',
    ];

    public function submissoes()
    {
        return $this->hasMany(Submissao::class);
    }

    public function publicacoes()
    {
        return $this->hasMany(Publicacao::class);
    }
}
