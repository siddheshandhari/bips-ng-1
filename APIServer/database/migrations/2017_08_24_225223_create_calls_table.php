<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('calls'))) {
        Schema::create('calls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject')->nullable();
            $table->string('call_purpose')->nullable();
            $table->string('contacts')->nullable();
            $table->string('accounts')->nullable();
            $table->string('current_call')->nullable();
            $table->string('completed_call')->nullable();
            $table->string('schedule_call')->nullable();
            $table->string('call_start_time')->nullable();            
            $table->string('call_duration')->nullable();            
            $table->string('description')->nullable();            
            $table->string('billable')->nullable();            
            $table->string('call_result')->nullable();    
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
        Schema::dropIfExists('calls');
    }
}
