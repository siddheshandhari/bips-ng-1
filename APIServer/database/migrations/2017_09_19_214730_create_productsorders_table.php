<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('productsorders'))) {
            Schema::create('productsorders', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('product_id')->length(10)->unsigned()->nullable();
                $table->foreign('product_id')->references('id')->on('products');
                $table->integer('order_id')->length(10)->unsigned()->nullable();
                $table->foreign('order_id')->references('id')->on('orders');
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
        Schema::dropIfExists('productsorders');
    }
}
