# `#[Config]`

**Description:** Injects a configuration value directly into a constructor or method parameter.

**Namespace:** `Illuminate\Container\Attributes\Config`

**Added in:** Laravel 11.0

## Usage

```php
use Illuminate\Container\Attributes\Config;

// Before:
// $fromAddress = config('mail.from.address');
// $fromName = config('mail.from.name');
```

```php
use Illuminate\Container\Attributes\Config;

// After:
class MailService
{
    public function __construct(
        #[Config('mail.from.address')] private readonly string $fromAddress,
        #[Config('mail.from.name')] private readonly string $fromName
    ) {}
}
```

---

[← Back to README](../../README.md)
