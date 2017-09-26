<?php

use Illuminate\Database\Seeder;

class YtestsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
      $faker = Faker\Factory::create();
      foreach(range(1, 30) as $index)
      {
        DB::table('ytests')->insert([
          'name' => $faker->name,
          'email'=> $faker->email,
          'password'=>$faker->password,
        ]);
      }
    }
}
