# `#[WithoutBroadcasting]`

**Description:** Skips broadcasting of the given stream event classes while an agent response is streaming.

**Namespace:** `Laravel\Ai\Attributes\WithoutBroadcasting`

**Added in:** `laravel/ai` v0.10.0

## Usage

```php
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Laravel\Ai\Streaming\Events\TextDelta;

// Before:
class ReportAgent implements Agent
{
    use Promptable;
}
// Every stream event, including each TextDelta, is broadcast.
```

```php
use Laravel\Ai\Attributes\WithoutBroadcasting;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Laravel\Ai\Streaming\Events\TextDelta;

// After:
#[WithoutBroadcasting(TextDelta::class)]
class ReportAgent implements Agent
{
    use Promptable;
}
```

You may pass multiple events:

```php
#[WithoutBroadcasting(TextDelta::class, ToolCall::class)]
class ReportAgent implements Agent
{
    use Promptable;
}
```

---

[← Back to README](../../README.md)
