# `#[Boot]`

**Description:** Marks a trait method as a model boot hook. The method is automatically called when the model class is booted.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Boot`

**Added in:** Laravel 12.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Boot;
use Illuminate\Database\Eloquent\Model;

// Before:
// trait naming convention bootTraitName() was auto-called
```

```php
use Illuminate\Database\Eloquent\Attributes\Boot;
use Illuminate\Database\Eloquent\Model;

// After:
trait HasSlug
{
    #[Boot]
    public static function bootHasSlug(): void
    {
        static::creating(function (Model $model) {
            $model->slug = str($model->title)->slug();
        });
    }
}

class Post extends Model
{
    use HasSlug;
}
```

---

[← Back to README](../../README.md)
