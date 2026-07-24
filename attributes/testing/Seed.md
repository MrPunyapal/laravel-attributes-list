# `#[Seed]`

**Description:** Runs the default database seeder before a test. Requires the `RefreshDatabase` or `LazilyRefreshDatabase` trait.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\Seed`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\Seed;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

// Before:
// $this->seed();
```

```php
use Illuminate\Foundation\Testing\Attributes\Seed;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

// After:
#[Seed]
class OrderTest extends TestCase
{
    use RefreshDatabase;

    public function test_orders_are_listed(): void
    {
        // The default DatabaseSeeder runs before this test
        $response = $this->get('/orders');

        $response->assertOk();
    }
}
```

---

[← Back to README](../../README.md)
