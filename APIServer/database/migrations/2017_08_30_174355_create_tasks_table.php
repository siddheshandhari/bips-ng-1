<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('task_owner')->nullable();
            $table->string('subject')->nullable();
            $table->string('due_date')->nullable();
            $table->string('contacts')->nullable();
            $table->string('accounts')->nullable();
            $table->string('status')->nullable();
            $table->string('priority')->nullable();
            $table->string('send_notification_email')->nullable();
            $table->string('remainder')->nullable();
            $table->string('repeat')->nullable();
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
        Schema::dropIfExists('tasks');
    }
}
