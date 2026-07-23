# `#[UseFactory]`

**Description:** Specifies the factory class to use for the model, overriding the default factory resolution.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseFactory`

**Added in:** Laravel 12.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\PostFactory;

// Before:
// protected static function newFactory(): Factory
// {
//     return PostFactory::new();
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\PostFactory;

// After:
#[UseFactory(PostFactory::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
