<?php
use Illuminate\Database\Seeder;

class LeadsTableSeeder extends Seeder
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
      $companies = $list;
      foreach(range(1, 30) as $index)
      {
        DB::table('leads')->insert([
          'user_id' => array_shift($users),
          'company_id' => array_shift($companies),
          'status' => $faker->word,
          'source' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        ]);
      }
    }
}
