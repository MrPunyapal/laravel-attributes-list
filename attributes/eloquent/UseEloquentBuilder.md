# `#[UseEloquentBuilder]`

**Description:** Specifies a custom Eloquent builder class to use for the model, replacing the default builder.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseEloquentBuilder`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseEloquentBuilder;
use Illuminate\Database\Eloquent\Model;
use App\Builders\PostBuilder;

#[UseEloquentBuilder(PostBuilder::class)]
class Post extends Model
{
}
```

```php
// App\Builders\PostBuilder
use Illuminate\Database\Eloquent\Builder;

class PostBuilder extends Builder
{
    public function published(): static
    {
        return $this->where('is_published', true);
    }

    public function featured(): static
    {
        return $this->where('is_featured', true);
    }
}

// Usage:
Post::query()->published()->featured()->get();
```

---

[← Back to README](../../README.md)
