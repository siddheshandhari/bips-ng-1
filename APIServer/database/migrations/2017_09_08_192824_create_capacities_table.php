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
            $table->integer('capacity')->length(10)->unsigned()->nullable();
            $table->float('weight')->nullable();
            $table->float('height')->nullable();
            $table->float('diameter')->nullable();
            $table->float('punt')->nullable();
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
