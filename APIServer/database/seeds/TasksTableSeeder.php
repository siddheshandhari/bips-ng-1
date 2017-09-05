<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $count = 30;
        $list = range(1, $count);
        shuffle($list);
        $addresses = $list;
        $contacts = $list;
        $accounts = $list;
        $potentials = $list;
        foreach(range(1, $count) as $index)
        {
            DB::table('tasks')->insert([
            'task_owner' => '1',
            'subject' => '2',
            'due_date' => '111',
            'contacts' => '111',
            'accounts' => 'sid',
            'status' => 'bottles',
            'priority' => 'bottles',
            'send_notification_email' => 'bottles',
            'remainder' => '111',
            'repeat' => 'sid',
            'description' => 'sid',
            'active' => '1'
            ]);
        }
    }
}
