<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNeckFinishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('neck_finishes'))) {
        Schema::create('neck_finishes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->length(10)->unsigned()->nullable();
            $table->foreign('product_id')->references('id')->on('products');
            $table->string('neck_finish_type')->nullable();
            $table->integer('inner_diameter')->nullable();
            $table->integer('outer_diameter')->nullable();
            $table->integer('ring')->nullable();
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
        //
    }
}
