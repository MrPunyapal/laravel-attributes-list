# `#[Temperature]`

**Description:** Defines the sampling temperature for generation, controlling randomness. Accepts a float between `0.0` (deterministic) and `1.0` (more creative).

**Namespace:** `Laravel\Ai\Attributes\Temperature`

## Usage

```php
use Laravel\Ai\Attributes\Temperature;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[Temperature(0.7)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
