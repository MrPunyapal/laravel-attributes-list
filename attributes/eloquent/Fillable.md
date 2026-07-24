# `#[Fillable]`

**Description:** Defines the mass assignable attributes for an Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Fillable`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $fillable = ['name', 'email', 'password'];
```

```php
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

// After:
#[Fillable(['name', 'email', 'password'])]
class User extends Model
{
}
```

Variadic form is also supported:

```php
#[Fillable('name', 'email', 'password')]
class User extends Model
{
}
```

---

[← Back to README](../../README.md)
