<?php

use Illuminate\Database\Seeder;

class NotesTableSeeder extends Seeder
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
        DB::table('notes')->insert([
          'subject' => $faker->sentence($nbWords = 6, $variableNbWords = true),
          'body' => $faker->text($maxNbChars = 200),
          'create_author_id' => $faker->numberBetween($min = 1, $max = 30),
          'update_author_id' => $faker->numberBetween($min = 1, $max = 30),
          'company_id' => $faker->numberBetween($min = 1, $max = 30),
          'category' => $faker->randomElement($array = array('order', 'quote', 'invoice', 'project')),
          'context_id' => $faker->numberBetween($min = 1, $max = 30),
          'created_at' => Carbon\Carbon::now(),
          'updated_at' => Carbon\Carbon::now()
        ]);
      };
    }
}
