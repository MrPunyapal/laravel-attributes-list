# `#[Config]`

**Description:** Injects a configuration value directly into a constructor or method parameter.

**Namespace:** `Illuminate\Container\Attributes\Config`

## Usage

```php
use Illuminate\Container\Attributes\Config;

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
