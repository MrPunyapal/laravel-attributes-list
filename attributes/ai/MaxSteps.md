# `#[MaxSteps]`

**Description:** Defines the maximum number of steps the agent may take when using tools.

**Namespace:** `Laravel\Ai\Attributes\MaxSteps`

**Added in:** `laravel/ai` v0.1+

## Usage

```php
use Laravel\Ai\Attributes\MaxSteps;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
// public function maxSteps(): int
// {
//     return 10;
// }
```

```php
use Laravel\Ai\Attributes\MaxSteps;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[MaxSteps(10)]
class SalesCoach implements Agent
{
    use Promptable;
}
```

---

[← Back to README](../../README.md)
