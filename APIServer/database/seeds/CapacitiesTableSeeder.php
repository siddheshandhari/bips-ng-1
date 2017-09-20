<?php

use Illuminate\Database\Seeder;

class CapacitiesTableSeeder extends Seeder
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
        foreach(range(1, 30) as $index)
        {
          DB::table('capacities')->insert([
            'capacity' => $faker->randomNumber(),
            'weight' => $faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5),
            'height' => $faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5),
            'diameter' => $faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 1),
            'punt' => $faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 1)
          ]);
        }
    }
}
