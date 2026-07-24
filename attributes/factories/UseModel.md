# `#[UseModel]`

**Description:** Defines the Eloquent model class that the factory creates, overriding the default model resolution.

**Namespace:** `Illuminate\Database\Eloquent\Factories\Attributes\UseModel`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\Attributes\UseModel;
use App\Models\User;

// Before:
// protected $model = User::class;
```

```php
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\Attributes\UseModel;
use App\Models\User;

// After:
#[UseModel(User::class)]
class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'  => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
        ];
    }
}
```

---

[← Back to README](../../README.md)
