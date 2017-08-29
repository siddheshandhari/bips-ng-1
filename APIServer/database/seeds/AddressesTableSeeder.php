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
      'company_id' => $faker->randomBetween($min=1, $max=60),
      'country' => $faker->country,
      'state' => $faker->state,
      'city' => $faker->city,
      'street' => $faker->streetAddress,
      'zipcode' => $faker->postcode,
      'shipping' => $faker->boolean,
      'active' => $faker->boolean
    }
}
