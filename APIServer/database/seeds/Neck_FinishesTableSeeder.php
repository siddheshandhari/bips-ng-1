<?php

use Illuminate\Database\Seeder;

class Neck_FinishesTableSeeder extends Seeder
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
          DB::table('neck_finishes')->insert([
            'product_id' => array_shift($products),
            'neck_finish_type' => $faker->name,
            'inner_diameter' => "1",
            'outer_diameter' => "1",
            'ring' => "1",
          ]);
        }
    }
}