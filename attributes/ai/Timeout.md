# `#[Timeout]`

**Description:** Defines the HTTP timeout in seconds for agent requests. Defaults to `60` seconds.

**Namespace:** `Laravel\Ai\Attributes\Timeout`

## Usage

```php
use Laravel\Ai\Attributes\Timeout;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[Timeout(120)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
