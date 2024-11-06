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
        Schema::create('participantes', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 255);
            $table->char('cpf', 11)->nullable();
            $table->string('telefone', 30)->nullable();
            $table->string('pais', 100)->nullable();
            $table->date('data_nascimento')->nullable();
            $table->string('sexo', 10)->nullable();
            $table->string('area_formacao', 255)->nullable();
            $table->string('link_curriculo', 255)->nullable();
            $table->string('titulacao', 255)->nullable();
            $table->boolean('status')->default(true);
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participantes');
    }
};
