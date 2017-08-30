<?php
use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
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
        DB::table('companies')->insert([
          'name' => $faker->company,
          'website' => $faker->domainName,
          'billing_address_id' => $faker->numberBetween($min = 1, $max = 60),
          'shipping_address_id' => $faker->numberBetween($min = 1, $max = 60),
          'employees' => $faker->numberBetween($min=10, $max=5000),
          'rating' => $faker->randomDigit,
          'industry' => $faker->catchPhrase,
          'annual_revenue' => $faker->randomNumber,
          'tier' => $faker->randomDigit,
          'active' => $faker->boolean
        ]);
      }
    }
}
