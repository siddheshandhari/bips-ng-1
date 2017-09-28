<?php

use Illuminate\Database\Seeder;

class PotentialsTableSeeder extends Seeder
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
        $users = $list;
        $companies = $list;
        $accounts = $list;
        foreach(range(1, $count) as $index)
        {
            DB::table('potentials')->insert([
            'company_id' => array_shift($companies),
            'user_id' => array_shift($users),
            'status' => $faker->word,
            'source' => $faker->sentence($nbWords = 6, $variableNbWords = true),
            // 'account_id' => array_shift($accounts),
            // 'potential_owner' => '1',
            // 'account_type' => '2',
            // 'amount' => '111',
            // 'stage' => '111',
            // 'next_step' => 'sid',
            // 'lead_source' => 'bottles',
            // 'probability' => 'bottles',
            // 'expected_revenue' => 'bottles',
            // 'compaign_source' => 'bottles',
            // 'sku_name' => '111',
            // 'price/case' => '111',
            // 'annually_useage' => 'sid',
            // 'potential_name' => 'bottles',
            // 'description' => 'bottles',
            ]);
        }
    }
}
