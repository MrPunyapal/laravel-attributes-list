# `#[UseSmartestModel]`

**Description:** Instructs the agent to automatically use the provider's most capable text model for complex tasks, without specifying a model name explicitly.

**Namespace:** `Laravel\Ai\Attributes\UseSmartestModel`

## Usage

```php
use Laravel\Ai\Attributes\UseSmartestModel;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[UseSmartestModel]
class ComplexReasoner implements Agent
{
    use Promptable;

    // Will use the most capable model (e.g., Opus)...
}
```

---

[← Back to README](../../README.md)
