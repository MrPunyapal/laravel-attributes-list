# `#[Appends]`

**Description:** Appends accessor attributes to the model's array and JSON representation.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Appends`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Model;

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
