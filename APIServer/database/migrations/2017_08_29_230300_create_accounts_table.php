comp<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->length(10)->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('company_id')->length(10)->unsigned()->unique()->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->string('account_number')->nullable();
            $table->string('sic_code')->nullable();
            $table->string('account_type')->nullable();
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
        Schema::dropIfExists('accounts');
    }
}
