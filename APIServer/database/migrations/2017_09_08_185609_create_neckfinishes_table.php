<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNeckfinishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('neckfinishes'))) {
            Schema::create('neckfinishes', function (Blueprint $table) {
                $table->increments('id');
                // $table->integer('product_id')->length(10)->unsigned()->nullable();
                // $table->foreign('product_id')->references('id')->on('products');
                $table->string('neck_finish_type')->nullable();
                $table->float('inner_diameter')->nullable();
                $table->float('outer_diameter')->nullable();
                $table->float('ring')->nullable();
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
        Schema::dropIfExists('neckfinishes');
    }
}
