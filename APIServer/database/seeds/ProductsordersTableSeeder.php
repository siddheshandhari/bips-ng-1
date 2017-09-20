<?php

use Illuminate\Database\Seeder;

class ProductsordersTableSeeder extends Seeder
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
        $orders = $list;
        foreach(range(1, 30) as $index) {
            DB::table('productsorders')->insert([
                'product_id' => array_shift($products),
                'order_id' => array_shift($orders)
            ]);
        }
    }
}
