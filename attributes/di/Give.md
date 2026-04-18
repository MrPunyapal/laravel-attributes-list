# `#[Give]`

**Description:** Contextually gives a specific value or binding for the annotated parameter, similar to `$this->app->when(...)->needs(...)->give(...)`.

**Namespace:** `Illuminate\Container\Attributes\Give`

## Usage

```php
use Illuminate\Container\Attributes\Give;

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
