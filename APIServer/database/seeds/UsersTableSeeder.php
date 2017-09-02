<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
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
        DB::table('users')->insert([
          'email' => $faker->companyEmail,
          'password' => $faker->password,
          'first_name' => $faker->firstName,
          'last_name' => $faker->lastName,
          'nick_name' => $faker->name,
          'gender' => $faker->randomElement($array = array('male', 'female')),
          'ssn' => $faker->ssn,
          'country' => $faker->country,
          'time_zone' => $faker->timezone,
          'phone' => $faker->phoneNumber,
          'level' => $faker->randomDigit,
          'group_id' => $faker->randomDigit,
        ]);
      }
    }
}
