# `#[Strict]`

**Description:** Opts an agent into strict mode for structured output, so the model response must follow the schema exactly.

**Namespace:** `Laravel\Ai\Attributes\Strict`

**Added in:** `laravel/ai` v0.10.0

## Usage

```php
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasStructuredOutput;
use Laravel\Ai\Promptable;

// Before:
class ElementAgent implements Agent, HasStructuredOutput
{
    use Promptable;

    public function schema(JsonSchema $schema): array
    {
        return [
            'symbol' => $schema->string()->required(),
        ];
    }
}
// Strict mode is off. The provider treats the schema as a hint.
```

```php
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Attributes\Strict;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasStructuredOutput;
use Laravel\Ai\Promptable;

// After:
#[Strict]
class ElementAgent implements Agent, HasStructuredOutput
{
    use Promptable;

    public function instructions(): string
    {
        return 'You know about periodic table element symbols.';
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'symbol' => $schema->string()->required(),
        ];
    }
}
```

---

[← Back to README](../../README.md)
