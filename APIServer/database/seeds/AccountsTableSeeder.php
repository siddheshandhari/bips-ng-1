<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Company;

class AccountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker\Factory::create();

      $userIds = User::pluck('id')->all();
      $list = range(1, 30);
      shuffle($list);
      $companies = $list;

      foreach(range(1, 30) as $index)
      {
        DB::table('accounts')->insert([
          'user_id' => $faker->randomElement($userIds),
          'company_id' => array_shift($companies),
          'account_number' => $faker->word,
          'sic_code' => $faker->word,
          'account_type' => $faker->word
        ]);
      }
    }
}
