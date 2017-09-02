<?php

use Illuminate\Database\Seeder;

class CallsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {
            $faker = Faker\Factory::create();
            $count = 30;
            $list = range(1, $count);
            shuffle($list);
            $users = $list;
            $companies = $list;
            foreach(range(1, $count) as $index)
            {
                DB::table('calls')->insert([
                    'subject' => '1',
                    'call_purpose' => '2',
                    'contacts' => '111',
                    'accounts' => '111',
                    'current_call' => 'sid',
                    'completed_call' => 'bottles',
                    'schedule_call' => 'bottles',
                    'call_start_time' => 'bottles',
                    'call_duration' => 'bottles',
                    'description' => 'bottles',
                    'billable' => 'bottles',
                    'call_result' => 'bottles',
                    'active' => '1'
                ]);
            }
        }
    }
}
