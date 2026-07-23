# `#[Initialize]`

**Description:** Marks a trait method as a model initialize hook. The method is automatically called when a new model instance is created.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Initialize`

**Added in:** Laravel 12.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Initialize;
use Illuminate\Database\Eloquent\Model;

// Before:
// trait naming convention initializeTraitName() was auto-called
```

```php
use Illuminate\Database\Eloquent\Attributes\Initialize;
use Illuminate\Database\Eloquent\Model;

// After:
trait HasDefaultStatus
{
    #[Initialize]
    public function initializeHasDefaultStatus(): void
    {
        $this->attributes['status'] ??= 'draft';
    }
}

class Post extends Model
{
    use HasDefaultStatus;
}
```

---

[← Back to README](../../README.md)
