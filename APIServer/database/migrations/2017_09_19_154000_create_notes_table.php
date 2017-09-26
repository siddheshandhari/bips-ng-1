<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject')->nullable();
            $table->text('body')->nullable();
            $table->integer('create_author_id')->length(10)->unsigned()->nullable();
            $table->foreign('create_author_id')->references('id')->on('users');
            $table->integer('update_author_id')->length(10)->unsigned()->nullable();
            $table->foreign('update_author_id')->references('id')->on('users');
            $table->integer('company_id')->length(10)->unsigned()->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->string('category')->default('order');
            $table->integer('context_id')->length(10)->unsigned()->nullable();
            $table->boolean('is_personal')->default(true);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
}
