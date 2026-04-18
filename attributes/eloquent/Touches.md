# `#[Touches]`

**Description:** Defines the relationships whose parent model's `updated_at` timestamp should be updated when the model is saved.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Touches`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Touches;
use Illuminate\Database\Eloquent\Model;

#[Touches(['post', 'user'])]
class Comment extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

Variadic form is also supported:

```php
#[Touches('post', 'user')]
class Comment extends Model
{
}
```

---

[← Back to README](../../README.md)
