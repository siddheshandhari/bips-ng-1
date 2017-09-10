<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('colors'))) {
        Schema::create('colors', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->length(10)->unsigned()->nullable();
            $table->foreign('product_id')->references('id')->on('products');
            $table->string('color')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colors');
    }
}