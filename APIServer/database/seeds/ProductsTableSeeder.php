<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
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
          DB::table('products')->insert([
            'name' => $faker->name,
            'image' => $faker->url,
            'sector' => $faker->name,
            'shape' => $faker->name,
            'model' => $faker->name,
            'details' => $faker->word,
            'technical_detail_link' => $faker->url,
            'description' => $faker->name,
          ]);
        }
    }
}
