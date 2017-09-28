<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackinginfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('packinginfos'))) {
            Schema::create('packinginfos', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('case_package')->length(10)->unsigned()->nullable();
                $table->integer('cases_pallet')->length(10)->unsigned()->nullable();
                $table->integer('quantity_pallet')->length(10)->unsigned()->nullable();
                $table->float('pallet_height')->nullable();
                $table->float('pallet_width')->nullable();
                $table->float('pallet_length')->nullable();
                $table->float('pallet_weight')->nullable();
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
        Schema::dropIfExists('packinginfos');
    }
}
