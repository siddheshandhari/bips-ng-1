<?php

use Illuminate\Database\Seeder;

class ProductCatagoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_catagories')->insert([
            'id' => '1',
            'catagory' => 'bottles',
        ]);
    }
}
