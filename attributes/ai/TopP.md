# `#[TopP]`

**Description:** Defines the top-p (nucleus) sampling threshold for generation, controlling token selection by cumulative probability. Accepts a float between `0.0` and `1.0`.

**Namespace:** `Laravel\Ai\Attributes\TopP`

**Added in:** `laravel/ai` v0.6.6+

## Usage

```php
use Laravel\Ai\Attributes\TopP;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
// public function topP(): float
// {
//     return 0.9;
// }
```

```php
use Laravel\Ai\Attributes\TopP;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[TopP(0.9)]
class SalesCoach implements Agent
{
    use Promptable;
}
```

---

[← Back to README](../../README.md)