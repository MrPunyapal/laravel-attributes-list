# `#[MaxTokens]`

**Description:** Defines the maximum number of tokens the model may generate in a response.

**Namespace:** `Laravel\Ai\Attributes\MaxTokens`

## Usage

```php
use Laravel\Ai\Attributes\MaxTokens;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

#[MaxTokens(4096)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
