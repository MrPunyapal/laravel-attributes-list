# `#[Scope]`

**Description:** Marks a model method as a local query scope, allowing it to be called without the `scope` prefix.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Scope`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    #[Scope]
    public function published(Builder $query): void
    {
        $query->where('is_published', true);
    }

    #[Scope]
    public function ofType(Builder $query, string $type): void
    {
        $query->where('type', $type);
    }
}

// Usage:
Post::query()->published()->ofType('article')->get();
```

---

[← Back to README](../../README.md)
