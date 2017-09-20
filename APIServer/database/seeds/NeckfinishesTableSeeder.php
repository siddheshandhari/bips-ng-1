<?php

use Illuminate\Database\Seeder;

class NeckfinishesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach(range(1, 30) as $index) {
            DB::table('neckfinishes')->insert([
                'neck_finish_type' =>$faker->word,
                'inner_diameter' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 1),
                'outer_diameter' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 1),
                'ring' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 1)

            ]);
        }
        
    }
}
