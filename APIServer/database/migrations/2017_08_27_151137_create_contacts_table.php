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
            $table->integer('company_id')->length(10)->unsigned()->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->nullable();
            $table->string('title')->nullable();
            $table->string('phone')->nullable();
            $table->string('department')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('other_phone')->nullable();
            $table->string('fax')->nullable();
            $table->string('mobile')->nullable();
            $table->string('birthday')->nullable();
            $table->string('assistant')->nullable();
            $table->string('asst_phone')->nullable();
            $table->string('reports_to')->nullable();
            $table->string('skype')->nullable();
            $table->string('customer_type')->nullable();
            $table->string('twitter')->nullable();
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
