<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('products'))) {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('serial_number')->nullable();
            $table->integer('color_id')->length(10)->unsigned()->nullable();
            $table->foreign('color_id')->references('id')->on('colors');
            $table->integer('capacity_id')->length(10)->unsigned()->nullable();
            $table->foreign('capacity_id')->references('id')->on('capacities');
            $table->integer('neckfinish_id')->length(10)->unsigned()->nullable();
            $table->foreign('neckfinish_id')->references('id')->on('neckfinishes');
            $table->integer('packinginfo_id')->length(10)->unsigned()->nullable();
            $table->foreign('packinginfo_id')->references('id')->on('packinginfos');
            $table->integer('showcase_id')->length(10)->unsigned()->nullable();
            $table->string('name')->nullable();
            $table->string('image')->nullable();
            $table->string('catagory')->nullable();
            $table->string('type')->nullable();
            $table->string('style')->nullable();
            $table->string('model')->nullable();
            $table->string('description')->nullable();
            $table->string('shape')->nullable();
            $table->string('material')->nullable();
            $table->string('details')->nullable();
            $table->string('technical_detail_link')->nullable();
            $table->bigInteger('batch_number')->nullable();
            $table->integer('unit_measure')->length(10)->unsigned()->nullable();
            $table->float('msrp')->nullable();
            $table->string('drawing')->nullable();
            $table->string('heavy_metal')->nullable();
            $table->string('fda_report')->nullable();
            $table->string('msds')->nullable();
            $table->string('certificate')->nullable();
            $table->string('qc_report')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('products');
    }
}
