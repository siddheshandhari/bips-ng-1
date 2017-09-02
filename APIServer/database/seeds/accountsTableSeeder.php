<?php

use Illuminate\Database\Seeder;

class accountsTableSeeder extends Seeder
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
        foreach(range(1, $count) as $index)
        {
            DB::table('accounts')->insert([
                'user_id' => '1',
                'company_id' => '2',
                'account_number' => '111',
                'sic_code' => '111',
                'ownership' => 'sid',
                'account_type' => 'bottles',
                'active' => '1'
            ]);
        }
    }
}
