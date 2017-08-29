<?php

use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker\Factory::create();
      foreach(range(1, 60) as $index)
      {
        DB::table('addresses')->insert([
          'company_id' => $faker->numberBetween($min = 1, $max = 30),
          'country' => $faker->country,
          'state' => $faker->state,
          'city' => $faker->city,
          'street' => $faker->streetAddress,
          'zipcode' => $faker->postcode,
          'shipping' => $faker->boolean,
          'active' => $faker->boolean
        ]);  
      }
    }
}
