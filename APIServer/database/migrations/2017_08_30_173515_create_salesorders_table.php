<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salesorders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('address_id')->length(10)->unsigned()->nullable();
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->integer('account_id')->length(10)->unsigned()->nullable();
            $table->foreign('account_id')->references('id')->on('accounts');
            $table->integer('contact_id')->length(10)->unsigned()->nullable();
            $table->foreign('contact_id')->references('id')->on('contacts');
            $table->integer('potential_id')->length(10)->unsigned()->nullable();
            $table->foreign('potential_id')->references('id')->on('potentials');
            $table->string('salesorder_owner')->nullable();
            $table->string('subject')->nullable();
            $table->string('purchase')->nullable();
            $table->string('quote_name')->nullable();
            $table->string('due_date')->nullable();
            $table->string('payment_term')->nullable();
            $table->string('status')->nullable();
            $table->string('product_detail')->nullable();
            $table->string('terms_conditions')->nullable();
            $table->string('description')->nullable();
            $table->boolean('active')->default(true);
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
        Schema::dropIfExists('salesorders');
    }
}
