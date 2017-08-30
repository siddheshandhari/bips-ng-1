<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePotentialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('potentials', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id')->length(10)->unsigned()->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->integer('user_id')->length(10)->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('potential_owner')->nullable();
            $table->string('account_type')->nullable();
            $table->string('amount')->nullable();
            $table->string('stage')->nullable();
            $table->string('next_step')->nullable();
            $table->string('lead_source')->nullable();
            $table->string('probability')->nullable();
            $table->string('expected_revenue')->nullable();
            $table->string('compaign_source')->nullable();
            $table->string('sku_name')->nullable();
            $table->string('price/case')->nullable();
            $table->string('annually_useage')->nullable();
            $table->string('potential_name')->nullable();
            $table->string('description')->nullable();
            $table->boolean('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('potentials');
    }
}
