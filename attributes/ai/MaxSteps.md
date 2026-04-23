# `#[MaxSteps]`

**Description:** Defines the maximum number of steps the agent may take when using tools.

**Namespace:** `Laravel\Ai\Attributes\MaxSteps`

## Usage

```php
use Laravel\Ai\Attributes\MaxSteps;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[MaxSteps(10)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
