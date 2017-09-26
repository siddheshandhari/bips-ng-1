<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsimonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         if (!(Schema::hasTable('newsimons'))) {
        Schema::create('newsimons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('color')->nullable();
            $table->string('first_name')->nullable();
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
        Schema::dropIfExists('newsimons');
    }
}
