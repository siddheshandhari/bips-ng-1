<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserloggedinhistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userloggedinhistories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->length(10)->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('ip')->nullable();
            $table->string('status')->nullable();
            $table->boolean('active');
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
        Schema::dropIfExists('userloggedinhistoriess');
    }
}
