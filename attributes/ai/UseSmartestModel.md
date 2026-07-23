# `#[UseSmartestModel]`

**Description:** Instructs the agent to automatically use the provider's most capable text model for complex tasks, without specifying a model name explicitly.

**Namespace:** `Laravel\Ai\Attributes\UseSmartestModel`

**Added in:** `laravel/ai` v0.7+

## Usage

```php
use Laravel\Ai\Attributes\UseSmartestModel;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
// public function useSmartestModel(): bool
// {
//     return true;
// }
```

```php
use Laravel\Ai\Attributes\UseSmartestModel;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[UseSmartestModel]
class ComplexReasoner implements Agent
{
    use Promptable;

    // Will use the most capable model (e.g., Opus)...
}
```

---

[← Back to README](../../README.md)
