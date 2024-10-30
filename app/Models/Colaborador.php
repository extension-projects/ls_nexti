<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colaborador extends Model
{
    use HasFactory;

    protected $table = 'colaboradores';

    protected $fillable = [
        'nome',
        'titulacao',
        'submissao_id',
        'chamada_id',
    ];

    public function submissao()
    {
        return $this->belongsTo(Submissao::class);
    }

    public function chamada()
    {
        return $this->belongsTo(Chamada::class);
    }
}