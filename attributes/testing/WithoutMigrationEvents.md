# `#[WithoutMigrationEvents]`

**Description:** Prevents migration events from being dispatched during test execution. Can be applied to a test class or individual test method.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\WithoutMigrationEvents`

**Added in:** Laravel 13.35

## Usage

```php
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\Attributes\WithoutMigrationEvents;
use Tests\TestCase;

// Before:
class MigrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_migrations_run_without_events(): void
    {
        $this->withoutMigrationEvents();
        // Test runs with migrations but events are not dispatched
    }
}
```

```php
use Illuminate\Foundation\Testing\Attributes\WithoutMigrationEvents;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

// After (prevent events for the entire test class):
#[WithoutMigrationEvents]
class MigrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_migrations_run_silently(): void
    {
        // Migration events are not dispatched
    }
}
```

You may also apply it to individual test methods:

```php
class MigrationTest extends TestCase
{
    use RefreshDatabase;

    #[WithoutMigrationEvents]
    public function test_a_specific_migration(): void
    {
        // Migration events are not dispatched for this test
    }

    public function test_another_migration(): void
    {
        // Migration events are dispatched for this test
    }
}
```

---

[← Back to README](../../README.md)
