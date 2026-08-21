# `#[RepairToolCalls]`

**Description:** Lets an agent recover when the model calls a tool that does not exist. Instead of throwing, the agent returns a tool result listing the available tools so the model can retry.

**Namespace:** `Laravel\Ai\Attributes\RepairToolCalls`

**Added in:** `laravel/ai` v0.11.0

## Usage

```php
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// Before:
class SearchAgent implements Agent
{
    use Promptable;
}
// Calling an unregistered tool throws Laravel\Ai\Exceptions\NoSuchToolException.
```

```php
use Laravel\Ai\Attributes\RepairToolCalls;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

// After:
#[RepairToolCalls]
class SearchAgent implements Agent
{
    use Promptable;
}
// The unknown tool call is answered with the list of available
// tools and the model gets another step to correct itself.
```

---

[← Back to README](../../README.md)
