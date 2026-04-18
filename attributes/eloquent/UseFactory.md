# `#[UseFactory]`

**Description:** Specifies the factory class to use for the model, overriding the default factory resolution.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseFactory`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\PostFactory;

#[UseFactory(PostFactory::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
