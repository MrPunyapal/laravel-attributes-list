# `#[Boot]`

**Description:** Marks a trait method as a model boot hook. The method is automatically called when the model class is booted.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Boot`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Boot;
use Illuminate\Database\Eloquent\Model;

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
