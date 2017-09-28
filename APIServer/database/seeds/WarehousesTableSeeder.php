<?php

use Illuminate\Database\Seeder;

class WarehousesTableSeeder extends Seeder
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
            DB::table('warehouses')->insert([
                'location' => $faker->city,
                'on_hold' => $faker->randomNumber(),
                'incoming' => $faker->randomNumber(),
                'in_production' => $faker->randomNumber(),
                'on_purchase_order' => $faker->randomNumber(),
                'in_state' => $faker->randomNumber(),
                'total_quantity' => $faker->randomNumber(),
                'available_quantity' => $faker->randomNumber(),
                'stock_quantity' => $faker->randomNumber(),
                'sold' => $faker->randomNumber(),
                'comitted' => $faker->randomNumber(),
                'lot_number' => $faker->word,
                'estimated_time_arrival' => $faker->date,
                'ready_in_china' => $faker->date,
                'date_ready' => $faker->date,
                'production_eta' => $faker->date
            ]);
        }
    }
}
