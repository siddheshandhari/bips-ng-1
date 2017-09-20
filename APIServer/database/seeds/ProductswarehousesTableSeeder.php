<?php

use Illuminate\Database\Seeder;

class ProductswarehousesTableSeeder extends Seeder
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
        $warehouses = $list;
        foreach(range(1, 30) as $index) {
            DB::table('productswarehouses')->insert([
                'product_id' => array_shift($products),
                'warehouse_id' => array_shift($warehouses)
            ]);
        }
    }
}
