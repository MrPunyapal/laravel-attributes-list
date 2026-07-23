# `#[Model]`

**Description:** Defines the model the agent should use when prompting the AI provider.

**Namespace:** `Laravel\Ai\Attributes\Model`

**Added in:** `laravel/ai` v0.1+

## Usage

```php
use Laravel\Ai\Attributes\Model;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
// public function model(): string
// {
//     return 'claude-haiku-4-5-20251001';
// }
```

```php
use Laravel\Ai\Attributes\Model;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[Model('claude-haiku-4-5-20251001')]
class SalesCoach implements Agent
{
    use Promptable;
}
```

---

[← Back to README](../../README.md)
