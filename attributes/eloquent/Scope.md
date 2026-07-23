# `#[Scope]`

**Description:** Marks a model method as a local query scope, allowing it to be called without the `scope` prefix.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Scope`

**Added in:** Laravel 12.4

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

// Before:
// public function scopePublished(Builder $query): void
// {
//     $query->where('is_published', true);
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

// After:
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
