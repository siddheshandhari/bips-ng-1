<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductswarehousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('productswarehouses'))) {
            Schema::create('productswarehouses', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('product_id')->length(10)->unsigned()->nullable();
                $table->foreign('product_id')->references('id')->on('products');
                $table->integer('warehouse_id')->length(10)->unsigned()->nullable();
                $table->foreign('warehouse_id')->references('id')->on('warehouses');
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
        Schema::dropIfExists('productswarehouses');
    }
}
