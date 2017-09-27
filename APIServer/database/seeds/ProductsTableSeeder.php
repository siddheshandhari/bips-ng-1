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
        $count = 30;
        $list = range(1, $count);
        shuffle($list);
        $colors = $list;
        $capacities = $list;
        $neckfinishes = $list;
        $packinginfos = $list;
        foreach(range(1, 30) as $index)
        {
          DB::table('products')->insert([
            'serial_number' => $faker->word,
            'color_id' => array_shift($colors),
            'capacity_id' => array_shift($capacities),
            'neckfinish_id' => array_shift($neckfinishes),
            'packinginfo_id' => array_shift($packinginfos),
            'showcase_id' => $faker->randomNumber(),
            'name' => $faker->name,
            'image' => $faker->url,
            'catagory' => $faker->word,
            'type' => $faker->word,
            'style' => $faker->word,
            'model' => $faker->word,
            'description' => $faker->word,
            'shape' => $faker->word,
            'material' => $faker->word,
            'details' => $faker->word,
            'technical_detail_link' => $faker->url,
            'batch_number' => $faker->randomNumber(),
            'unit_measure' => $faker->randomNumber(),
            'msrp' => $faker->randomFloat($nbMaxDecimal = 5, $min = 0, $max = 5),
            'drawing' => $faker->url,
            'heavy_metal' => $faker->url,
            'fda_report' => $faker->url,
            'msds' => $faker->url,
            'certificate' => $faker->url,
            'qc_report' => $faker->url,
            'status' => $faker->word,
            
          ]);
        }
    }
}
