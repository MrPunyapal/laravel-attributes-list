# `#[Context]`

**Description:** Injects a value from the application's shared context.

**Namespace:** `Illuminate\Container\Attributes\Context`

## Usage

```php
use Illuminate\Container\Attributes\Context;

class RequestLogger
{
    public function __construct(
        #[Context('trace_id')] private readonly ?string $traceId
    ) {}

    public function log(string $message): void
    {
        logger()->info($message, ['trace_id' => $this->traceId]);
    }
}
```

Also supports hidden context:

```php
#[Context('secret_key', hidden: true)] private readonly ?string $secret
```

---

[← Back to README](../../README.md)
