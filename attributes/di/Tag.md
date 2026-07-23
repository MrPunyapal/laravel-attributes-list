# `#[Tag]`

**Description:** Injects all container bindings registered under a specific tag.

**Namespace:** `Illuminate\Container\Attributes\Tag`

**Added in:** Laravel 11.0

## Usage

```php
use Illuminate\Container\Attributes\Tag;

// Before (service provider):
// $reporters = app()->tagged('reports');
```

```php
use Illuminate\Container\Attributes\Tag;

// After:
class ReportAggregator
{
    public function __construct(
        #[Tag('reports')] private readonly iterable $reporters
    ) {}

    public function generate(): array
    {
        return collect($this->reporters)
            ->flatMap(fn ($reporter) => $reporter->data())
            ->all();
    }
}
```

In a service provider, register the tagged bindings:

```php
$this->app->tag([SalesReport::class, TrafficReport::class], 'reports');
```

---

[← Back to README](../../README.md)
