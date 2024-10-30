<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submissao extends Model
{
    protected $table = 'submissoes';

    protected $fillable = [
        'titulo',
        'resumo',
        'chamada_id',
        'autor_id',
        'colaborador_id',
        'categoria_id'
    ];

    public function chamada()
    {
        return $this->belongsTo(Chamada::class);
    }

    public function autor()
    {
        return $this->belongsTo(Participante::class, 'autor_id');
    }

    public function colaborador()
    {
        return $this->belongsTo(Colaborador::class, 'colaborador_id');
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}