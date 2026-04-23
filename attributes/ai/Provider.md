# `#[Provider]`

**Description:** Defines the AI provider (or providers for failover) the agent should use.

**Namespace:** `Laravel\Ai\Attributes\Provider`

## Usage

```php
use Laravel\Ai\Attributes\Provider;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Enums\Lab;
use Laravel\Ai\Promptable;

#[Provider(Lab::Anthropic)]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

You may also pass an array of providers to enable automatic failover:

```php
#[Provider([Lab::OpenAI, Lab::Anthropic])]
class SalesCoach implements Agent
{
    use Promptable;

    // ...
}
```

---

[← Back to README](../../README.md)
