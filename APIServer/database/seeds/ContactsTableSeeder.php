<?php

use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
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
          DB::table('contact')->insert([
            'company_id' => $faker->numberBetween($min=1, $max=30),
            'address_id' => $faker->numberBetween(),
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'email' => $faker->email,
            'title' => $faker->word,
            'phone' => $faker->phoneNumber,
            'department' => $faker->departmentName,
            'home_phone' => $faker->phoneNumber,
            'other_phone' => $faker->phoneNumber,
            'fax' => $faker->phoneNumber,
            'mobile' => $faker->phoneNumber,
            'birthday' => $faker->date($format = 'Y-m-d', $max = 'now'),
            'assistant' => $faker->name,
            'asst_phone' => $faker->phoneNumber,
            'skype' => $faker->userName,
            'customer_type' => $faker->word,
            'twitter' => $faker->userName,
            'active' => $faker->boolean
          ])
        }
    }
}
