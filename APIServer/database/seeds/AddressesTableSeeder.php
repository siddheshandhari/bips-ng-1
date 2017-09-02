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
          'country' => $faker->country,
          'state' => $faker->stateAbbr,
          'city' => $faker->city,
          'street' => $faker->streetAddress,
          'zipcode' => $faker->postcode,
        ]);
      }
    }
}
