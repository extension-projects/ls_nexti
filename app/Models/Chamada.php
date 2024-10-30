<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chamada extends Model
{
    use HasFactory;

    protected $table = 'chamadas';

    protected $fillable = [
        'titulo_chamada',
        'descricao',
        'prazo',
        'adm_id',
        'categoria_id',
    ];

    public function adm()
    {
        return $this->belongsTo(Adm::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function submissoes()
    {
        return $this->hasMany(Submissao::class);
    }
}