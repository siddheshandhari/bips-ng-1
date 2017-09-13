<?php

use Illuminate\Database\Seeder;

class PricesTableSeeder extends Seeder
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
          DB::table('prices')->insert([
            'product_id' => array_shift($products),
            'quantity' => $faker->name,
            'price' => "1",
          ]);
        }
    }
}
