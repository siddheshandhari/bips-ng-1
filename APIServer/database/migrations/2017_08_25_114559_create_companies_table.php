<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('companies'))) {
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('logoUrl')->nullable();
            $table->integer('billing_address_id')->length(10)->unsigned()->nullable();
            $table->foreign('billing_address_id')->references('id')->on('addresses');
            $table->integer('shipping_address_id')->length(10)->unsigned()->nullable();
            $table->foreign('shipping_address_id')->references('id')->on('addresses');
            $table->string('website')->nullable();
            $table->integer('employees')->nullable();
            $table->integer('rating')->nullable();
            $table->string('industry')->nullable();
            $table->bigInteger('annual_revenue')->nullable();
            $table->integer('tier')->nullable();
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
        Schema::dropIfExists('companies');
    }
}
