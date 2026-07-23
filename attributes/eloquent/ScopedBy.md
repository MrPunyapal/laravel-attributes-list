# `#[ScopedBy]`

**Description:** Applies one or more global scopes to the model automatically.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\ScopedBy`

**Added in:** Laravel 11.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\ActiveScope;
use App\Models\Scopes\PublishedScope;

// Before:
// protected static function booted(): void
// {
//     static::addGlobalScope(new ActiveScope());
//     static::addGlobalScope(new PublishedScope());
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\ActiveScope;
use App\Models\Scopes\PublishedScope;

// After:
#[ScopedBy([ActiveScope::class, PublishedScope::class])]
class Post extends Model
{
}
```

```php
// App\Models\Scopes\ActiveScope
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class ActiveScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        $builder->where('is_active', true);
    }
}
```

---

[← Back to README](../../README.md)
