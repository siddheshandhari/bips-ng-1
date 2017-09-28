<?php

use Illuminate\Database\Seeder;

class ColorsTableSeeder extends Seeder
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
          DB::table('colors')->insert([
            'color' => $faker->colorName

          ]);
        }
    }
}
