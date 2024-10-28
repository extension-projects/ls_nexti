<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('submissoes', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('resumo');
            $table->foreignId('chamada_id')->constrained('chamadas');
            $table->foreignId('autor_id')->constrained('participantes');
            $table->foreignId('colaborador_id')->nullable()->constrained('colaboradores');
            $table->foreignId('categoria_id')->constrained('categorias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submissoes');
    }
};
