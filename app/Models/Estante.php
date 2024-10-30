<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estante extends Model
{
    use HasFactory;

    protected $table = 'estante';

    protected $fillable = [
        'amostra',
        'chamada_id',
        'categoria_id',
        'tag_id',
        'submissao_id',
    ];

    public function chamada()
    {
        return $this->belongsTo(Chamada::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }

    public function submissao()
    {
        return $this->belongsTo(Submissao::class);
    }
}