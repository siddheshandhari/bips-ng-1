<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
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
                DB::table('events')->insert([
                    'new_event' => '1',
                    'location' => '2',
                    'all_day' => '111',
                    'start_time' => '111',
                    'end_time' => 'sid',
                    'host' => 'bottles',
                    'participants' => 'bottles',
                    'related_to' => 'bottles',
                    'repeat' => 'bottles',
                    'active' => '1'
                ]);
            }
        }
    }
}
