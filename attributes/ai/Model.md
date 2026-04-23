# `#[Model]`

**Description:** Defines the model the agent should use when prompting the AI provider.

**Namespace:** `Laravel\Ai\Attributes\Model`

## Usage

```php
use Laravel\Ai\Attributes\Model;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[Model('claude-haiku-4-5-20251001')]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
