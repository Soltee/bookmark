<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
        	'name'      => 'Prabin Grg',
        	'email'     => 'prabin@example.com',
        	'password'  => bcrypt('password')
        ]);

        \App\Models\User::factory(2)->create();
        \App\Models\Bookmark::factory(100)->create([
                'is_active'  => 1
            ]);
    }
}
