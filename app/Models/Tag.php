<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tags';

    protected $fillable = [
        'nome_tag',
    ];

    public function submissoes()
    {
        return $this->belongsToMany(Submissao::class, 'submissao_tag', 'tag_id', 'submissao_id');
    }
}