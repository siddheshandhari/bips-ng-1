<?php

use Illuminate\Database\Seeder;

class NotesTableSeeder extends Seeder
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
        DB::table('notes')->insert([
          'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
          'body' => $faker->sentence($nbWords = 6, $variableNbWords = true),
          'author_id' => $faker->numberBetween($min = 1, $max = 30),
          'company_id' => $faker->numberBetween($min = 1, $max = 30),
          'order_id' => $faker->numberBetween($min = 1, $max = 30)
        ]);
      };
    }
}
