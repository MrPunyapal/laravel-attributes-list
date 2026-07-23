# `#[Give]`

**Description:** Contextually gives a specific value or binding for the annotated parameter, similar to `$this->app->when(...)->needs(...)->give(...)`.

**Namespace:** `Illuminate\Container\Attributes\Give`

**Added in:** Laravel 12.16

## Usage

```php
use Illuminate\Container\Attributes\Give;

// Before (service provider):
// $this->app->when(NotificationService::class)
//     ->needs('$fromEmail')
//     ->give('notifications@example.com');
```

```php
use Illuminate\Container\Attributes\Give;

// After:
class NotificationService
{
    public function __construct(
        #[Give('notifications@example.com')] private readonly string $fromEmail
    ) {}
}
```

Also accepts class names (string bindings):

```php
use App\Services\SmsDriver;

class NotificationService
{
    public function __construct(
        #[Give(SmsDriver::class)] private readonly DriverInterface $driver
    ) {}
}
```

---

[← Back to README](../../README.md)
