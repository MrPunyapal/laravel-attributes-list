# `#[UnitTest]`

**Description:** Marks a test method to run without booting the Laravel framework, making it significantly faster. Useful for pure unit tests mixed into a feature test class.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\UnitTest`

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\UnitTest;
use Tests\TestCase;

class LocationServiceTest extends TestCase
{
    // This test boots the framework (uses Http facade)
    public function test_get_coordinates_calls_api(): void
    {
        Http::fake([...]);
        // ...
    }

    // This test skips framework boot entirely — runs much faster
    #[UnitTest]
    public function test_get_state_returns_state_from_abbreviation(): void
    {
        $service = new LocationService;

        $this->assertSame('California', $service->getState('CA'));
    }
}
```

> **Warning:** Laravel TestCase methods that rely on the container (e.g. facades, `$this->app`) will not work inside `#[UnitTest]` methods.

---

[← Back to README](../../README.md)
