# `#[UseCheapestModel]`

**Description:** Instructs the agent to automatically use the provider's cheapest text model for cost optimization, without specifying a model name explicitly.

**Namespace:** `Laravel\Ai\Attributes\UseCheapestModel`

## Usage

```php
use Laravel\Ai\Attributes\UseCheapestModel;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[UseCheapestModel]
class SimpleSummarizer implements Agent
{
    use Promptable;

    // Will use the cheapest model (e.g., Haiku)...
}
```

---

[← Back to README](../../README.md)
