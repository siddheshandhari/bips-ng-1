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
        $faker = Faker\Factory::create();
    
        foreach(range(1, 30) as $index)
        {
          DB::table('product_catagories')->insert([
            
            'catagory' => $faker->word,
            
          ]);
        }


        // DB::table('product_catagories')->insert([
        //     'id' => '1',
        //     'catagory' => 'bottles',
        // ]);
    }
}
