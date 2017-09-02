<?php

use Illuminate\Database\Seeder;

class CrmsTableSeeder extends Seeder
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
              DB::table('crms')->insert([
                'user_id' => array_shift($users),
                'company_id' => array_shift($companies),
                'active' => $faker->boolean
              ]);
            }
          }
    }
}
