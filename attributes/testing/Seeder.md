# `#[Seeder]`

**Description:** Runs a specific seeder class before a test. Requires the `RefreshDatabase` or `LazilyRefreshDatabase` trait.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\Seeder`

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\Seeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Database\Seeders\OrderSeeder;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    #[Seeder(OrderSeeder::class)]
    public function test_orders_are_listed(): void
    {
        $response = $this->get('/orders');

        $response->assertOk();
    }
}
```

---

[← Back to README](../../README.md)
