# `#[Appends]`

**Description:** Appends accessor attributes to the model's array and JSON representation.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Appends`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $appends = ['full_name', 'is_admin'];
```

```php
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Model;

// After:
#[Appends(['full_name', 'is_admin'])]
class User extends Model
{
    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
```

Variadic form is also supported:

```php
#[Appends('full_name', 'is_admin')]
class User extends Model
{
}
```

---

[← Back to README](../../README.md)
