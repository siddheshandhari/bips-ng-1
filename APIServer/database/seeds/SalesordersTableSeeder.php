<?php

use Illuminate\Database\Seeder;

class SalesordersTableSeeder extends Seeder
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
        $addresses = $list;
        $contacts = $list;
        $accounts = $list;
        $potentials = $list;
        foreach(range(1, $count) as $index)
        {
            DB::table('salesorders')->insert([
            'address_id' => array_shift($addresses),
            'account_id' => array_shift($accounts),
            'contact_id' => array_shift($contacts),
            'potential_id' => array_shift($potentials),
            'salesorder_owner' => '1',
            'subject' => '2',
            'purchase' => '111',
            'quote_name' => '111',
            'due_date' => 'sid',
            'payment_term' => 'bottles',
            'status' => 'bottles',
            'product_detail' => 'bottles',
            'terms_conditions' => '111',
            'description' => 'sid',
            'active' => '1'
            ]);
        }
    }
}
