# `#[Fillable]`

**Description:** Defines the mass assignable attributes for an Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Fillable`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

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
