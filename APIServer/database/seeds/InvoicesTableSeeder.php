<?php

use Illuminate\Database\Seeder;

class InvoicesTableSeeder extends Seeder
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
        foreach(range(1, $count) as $index)
        {
            DB::table('invoices')->insert([
            'address_id' => array_shift($addresses),
            'contact_id' => array_shift($contacts),
            'account_id' => array_shift($accounts),
            'invoice_owner' => '1',
            'subject' => '2',
            'purchase_order' => '111',
            'invoice_date' => '111',
            'status' => 'sid',
            'sales_commission' => 'bottles',
            'product_details' => 'bottles',
            'terms_and_conditions' => 'bottles',
            'description' => 'bottles',
            'active' => '1'
            ]);
        }
    }
}
