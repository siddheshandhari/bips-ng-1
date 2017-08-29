<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    private $tables = [
      'leads',
      'companies',
      'users'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $this->cleanDatabase();
      $this->call(CompaniesTableSeeder::class);
      $this->call(UsersTableSeeder::class);
      $this->call(LeadsTableSeeder::class);
      $this->call(AddressesTableSeeder::class);
      $this->call(ContactsTableSeeder::class);
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
