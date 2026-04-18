# `#[Seed]`

**Description:** Runs the default database seeder before a test. Requires the `RefreshDatabase` or `LazilyRefreshDatabase` trait.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\Seed`

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\Seed;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    #[Seed]
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
