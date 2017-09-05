<?php

use Illuminate\Database\Seeder;

class QuotesTableSeeder extends Seeder
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
        $potentials = $list;
        foreach(range(1, $count) as $index)
        {
            DB::table('quotes')->insert([
            'address_id' => array_shift($addresses),
            'potential_id' => array_shift($potentials),
            'quote_owner' => '1',
            'subject' => '2',
            'valid_unit' => '111',
            'invoice_date' => '111',
            'date' => 'sid',
            'contacts_name' => 'bottles',
            'rating' => 'bottles',
            'account_name' => 'bottles',
            'delivery_requirement' => 'bottles',
            'products_details' => '111',
            'terms_conditions' => '111',
            'description' => 'sid',
            'active' => '1'
            ]);
        }
    }
}
