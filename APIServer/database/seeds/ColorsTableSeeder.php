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
        $list = range(1, $count);
        shuffle($list);
        $products = $list;
        foreach(range(1, 30) as $index)
        {
          DB::table('colors')->insert([
            'product_id' => array_shift($products),
            'color' => $faker->firstName,
          ]);
        }
    }
}
