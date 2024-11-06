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
            $table->string('keywords', 255)->nullable();
            $table->text('resumo');
            $table->text('abstract')->nullable();
            $table->text('anotacoes')->nullable();
            $table->date('dt_publicacao')->nullable();
            $table->binary('arquivo_submissao')->nullable();
            $table->boolean('disponibilidade')->default(false);
            $table->string('link_compra', 255)->nullable();
            $table->foreignId('chamada_id')->constrained('chamadas');
            $table->foreignId('autor_id')->constrained('participantes');
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
