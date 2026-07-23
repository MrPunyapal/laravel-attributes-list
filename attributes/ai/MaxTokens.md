# `#[MaxTokens]`

**Description:** Defines the maximum number of tokens the model may generate in a response.

**Namespace:** `Laravel\Ai\Attributes\MaxTokens`

**Added in:** `laravel/ai` v0.1+

## Usage

```php
use Laravel\Ai\Attributes\MaxTokens;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
// public function maxTokens(): int
// {
//     return 4096;
// }
```

```php
use Laravel\Ai\Attributes\MaxTokens;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[MaxTokens(4096)]
class SalesCoach implements Agent
{
    use Promptable;
}
```

---

[← Back to README](../../README.md)
