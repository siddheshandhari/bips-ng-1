<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!(Schema::hasTable('quotes'))) {
        Schema::create('quotes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('address_id')->length(10)->unsigned()->nullable();
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->integer('potential_id')->length(10)->unsigned()->nullable();
            $table->foreign('potential_id')->references('id')->on('potentials');
            $table->string('quote_owner')->nullable();
            $table->string('subject')->nullable();
            $table->string('valid_unit')->nullable();
            $table->string('invoice_date')->nullable();
            $table->string('date')->nullable();
            $table->string('contacts_name')->nullable();
            $table->string('rating')->nullable();
            $table->string('account_name')->nullable();
            $table->string('delivery_requirement')->nullable();
            $table->string('products_details')->nullable();
            $table->string('terms_conditions')->nullable();
            $table->string('description')->nullable();
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
        Schema::dropIfExists('qoutes');
    }
}
