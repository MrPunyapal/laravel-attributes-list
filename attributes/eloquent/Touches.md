# `#[Touches]`

**Description:** Defines the relationships whose parent model's `updated_at` timestamp should be updated when the model is saved.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Touches`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Touches;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $touches = ['post'];
```

```php
use Illuminate\Database\Eloquent\Attributes\Touches;
use Illuminate\Database\Eloquent\Model;

// After:
#[Touches(['post', 'user'])]
class Comment extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
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
