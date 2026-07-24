# `#[Unguarded]`

**Description:** Disables mass assignment protection for the model, allowing all attributes to be mass assigned.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Unguarded`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Unguarded;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $guarded = [];
```

```php
use Illuminate\Database\Eloquent\Attributes\Unguarded;
use Illuminate\Database\Eloquent\Model;

// After:
#[Unguarded]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
