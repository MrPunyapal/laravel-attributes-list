# `#[Context]`

**Description:** Injects a value from the application's shared context.

**Namespace:** `Illuminate\Container\Attributes\Context`

**Added in:** Laravel 12.15

## Usage

```php
use Illuminate\Container\Attributes\Context;

// Before:
// $traceId = app(\Illuminate\Contracts\Foundation\Application::class)
//     ->make(\Illuminate\Container\Context::class)
//     ->get('trace_id');
```

```php
use Illuminate\Container\Attributes\Context;

// After:
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
