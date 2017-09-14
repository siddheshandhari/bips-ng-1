<?php

use Illuminate\Database\Seeder;

class Product_CatagoriesTableSeeder extends Seeder
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
    }
}
