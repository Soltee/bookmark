<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Bookmark;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class BookmarkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bookmark::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_id = Arr::random(User::inRandomOrder()->pluck('id')->toArray());
        return [
            'title'   => $this->faker->word,
            'url'     => $this->faker->url,
            'user_id' => $user_id,
            'img_url' => $this->faker->imageUrl($width = 480, $height = 360)
        ];
    }
}
