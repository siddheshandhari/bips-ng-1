<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCapacitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('capacities'))) {
        Schema::create('capacities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->length(10)->unsigned()->nullable();
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('capacity')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('height')->nullable();
            $table->integer('diameter')->nullable();
            $table->integer('punt')->nullable();
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
        Schema::dropIfExists('capacities');
    }
}
