<?php

use Illuminate\Database\Seeder;

class PackinginfosTableSeeder extends Seeder
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
            DB::table('packinginfos')->insert([
                'case_package' =>$faker->randomNumber(),
                'cases_pallet' =>$faker->randomNumber(),
                'quantity_pallet' =>$faker->randomNumber(),
                'pallet_height' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5),
                'pallet_width' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5),
                'pallet_length' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5),
                'pallet_Weight' =>$faker->randomFloat($nbMaxDecimals = 5, $min = 0, $max = 5)

            ]);
        }
    }
}
