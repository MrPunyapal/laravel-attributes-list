# `#[ScopedBy]`

**Description:** Applies one or more global scopes to the model automatically.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\ScopedBy`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\ActiveScope;
use App\Models\Scopes\PublishedScope;

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
