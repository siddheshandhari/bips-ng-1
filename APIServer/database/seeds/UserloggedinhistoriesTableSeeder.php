<?php

use Illuminate\Database\Seeder;

class UserloggedinhistoriesTableSeeder extends Seeder
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
        $users = $list;
        foreach(range(1, $count) as $index)
        {
            DB::table('userloggedinhistories')->insert([
            'user_id' => array_shift($users),
            'ip' => 'delinquent',
            'status' => '2',
            'active' => '1'
            ]);
        }
    }
}
