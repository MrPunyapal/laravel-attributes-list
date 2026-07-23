# `#[Visible]`

**Description:** Defines the attributes that should be visible in model serialization (toArray / toJson).

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Visible`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Visible;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $visible = ['id', 'name', 'email'];
```

```php
use Illuminate\Database\Eloquent\Attributes\Visible;
use Illuminate\Database\Eloquent\Model;

// After:
#[Visible(['id', 'name', 'email'])]
class User extends Model
{
}
```

Variadic form is also supported:

```php
#[Visible('id', 'name', 'email')]
class User extends Model
{
}
```

---

[← Back to README](../../README.md)
