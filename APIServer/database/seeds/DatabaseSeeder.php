<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    private $tables = [
      'leads',
      'companies',
      'users',
      'accounts',
      'addresses',
      'accounts',
      'calls',
      'contacts',
      'crms',
      'events',
      'invoices',
      'leads',
      'potentials',
      'quotes',
      'salesorders',
      'tasks',
      'userloggedinhistories',
      'users',
      'colors',
      'capacities',
      'neckfinishes',
      'packinginfos',
      'products',
      'prices',
      'warehouses',
      'productswarehouses',
      'orders',
      'notes',
      'productsorders',
      'ytests'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $this->cleanDatabase();
      $this->call(AddressesTableSeeder::class);
      $this->call(CompaniesTableSeeder::class);
      $this->call(UsersTableSeeder::class);
      $this->call(ContactsTableSeeder::class);
      $this->call(AccountsTableSeeder::class);
      $this->call(LeadsTableSeeder::class);
      $this->call(CallsTableSeeder::class);
      $this->call(CrmsTableSeeder::class);
      $this->call(EventsTableSeeder::class);
      $this->call(InvoicesTableSeeder::class);
      $this->call(PotentialsTableSeeder::class);
      $this->call(QuotesTableSeeder::class);
      $this->call(SalesordersTableSeeder::class);
      $this->call(TasksTableSeeder::class);
      $this->call(UserloggedinhistoriesTableSeeder::class);
      $this->call(ColorsTableSeeder::class);
      $this->call(CapacitiesTableSeeder::class);
      $this->call(NeckfinishesTableSeeder::class);
      $this->call(PackinginfosTableSeeder::class);
      $this->call(ProductsTableSeeder::class);
      $this->call(PricesTableSeeder::class);
      $this->call(WarehousesTableSeeder::class);
      $this->call(ProductswarehousesTableSeeder::class);
      $this->call(OrdersTableSeeder::class);
      $this->call(NotesTableSeeder::class);
      $this->call(ProductsordersTableSeeder::class);
      $this->call(YtestsTableSeeder::class);
    }

    private function cleanDatabase()
    {

      DB::statement('SET FOREIGN_KEY_CHECKS=0;');

      foreach ($this->tables as $tableName)
      {
        DB::table($tableName)->truncate();
      }

      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    }
}
