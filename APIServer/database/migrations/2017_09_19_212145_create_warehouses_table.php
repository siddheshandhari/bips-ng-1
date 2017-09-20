<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWarehousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('warehouses'))) {
            Schema::create('warehouses', function(Blueprint $table) {
                $table->increments('id');
                $table->string('location')->nullable();
                $table->integer('on_hold')->length(10)->unsigned()->nullable();
                $table->integer('incoming')->length(10)->unsigned()->nullable();
                $table->integer('in_production')->length(10)->unsigned()->nullable();
                $table->integer('on_purchase_order')->length(10)->unsigned()->nullable();
                $table->integer('in_state')->length(10)->unsigned()->nullable();
                $table->integer('total_quantity')->length(10)->unsigned()->nullable();
                $table->integer('available_quantity')->length(10)->unsigned()->nullable();
                $table->integer('stock_quantity')->length(10)->unsigned()->nullable();
                $table->integer('sold')->length(10)->unsigned()->nullable();
                $table->integer('comitted')->length(10)->unsigned()->nullable();
                $table->string('lot_number')->nullable();
                $table->date('estimated_time_arrival')->nullable();
                $table->date('ready_in_china')->nullable();
                $table->date('date_ready')->nullable();
                $table->date('production_eta')->nullable();
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
        Schema::dropIfExists('warehouses');
    }
}
