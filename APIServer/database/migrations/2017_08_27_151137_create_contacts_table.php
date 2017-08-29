<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id')->unsiged();
            $table->integer('address_id')->unsigned();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('vendor_name');
            $table->string('email');
            $table->string('title');
            $table->string('phone');
            $table->string('department');
            $table->string('home_phone');
            $table->string('other_phone');
            $table->string('fax');
            $table->string('mobile');
            $table->string('birthday');
            $table->string('assistant');
            $table->string('asst_phone');
            $table->string('reports_to');
            $table->string('skype');
            $table->string('customer_type');
            $table->string('twitter');
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
        Schema::dropIfExists('contacts');
    }
}
