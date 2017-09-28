<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
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
        DB::table('orders')->insert([
          'name' => $faker->company,
          'date' => $faker->date,
          'quantity' => $faker->randomNumber(),
          'active' => $faker->boolean
        ]);
      };
    }
}
