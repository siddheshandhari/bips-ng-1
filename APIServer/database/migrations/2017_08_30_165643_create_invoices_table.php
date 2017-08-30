<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('address_id')->length(10)->unsigned()->nullable();
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->integer('contact_id')->length(10)->unsigned()->nullable();
            $table->foreign('contact_id')->references('id')->on('contacts');
            $table->integer('account_id')->length(10)->unsigned()->nullable();
            $table->foreign('account_id')->references('id')->on('accounts');
            $table->string('invoice_owner')->nullable();
            $table->string('subject')->nullable();
            $table->string('purchase_order')->nullable();
            $table->string('invoice_date')->nullable();
            $table->string('status')->nullable();
            $table->string('sales_commission')->nullable();
            $table->string('product_details')->nullable();
            $table->string('terms_and_conditions')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
