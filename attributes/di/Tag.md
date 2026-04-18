# `#[Tag]`

**Description:** Injects all container bindings registered under a specific tag.

**Namespace:** `Illuminate\Container\Attributes\Tag`

## Usage

```php
use Illuminate\Container\Attributes\Tag;

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
