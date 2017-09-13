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
        $list = range(1, $count);
        shuffle($list);
        $products = $list;
        foreach(range(1, 30) as $index)
        {
          DB::table('capacities')->insert([
            'product_id' => array_shift($products),
            'capacity' => "2",
            'weight' => "1",
            'height' => "1",
            'diameter' => "1",
            'punt' => "1",
          ]);
        }
    }
}
