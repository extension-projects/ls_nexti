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
        Schema::create('publicacoes', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descricao');
            $table->string('doi', 255)->nullable();
            $table->binary('arquivo_publicacao')->nullable();
            $table->string('organizadores');
            $table->string('link_compra', 255)->nullable();
            $table->foreignId('adm_id')->constrained('adms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publicacoes');
    }
};
