<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';

    protected $fillable = [
        'mensagem',
        'nota',
        'autor_id',
    ];

    /**
     * Get the autor that owns the feedback.
     */
    public function autor()
    {
        return $this->belongsTo(Participante::class, 'autor_id');
    }
}