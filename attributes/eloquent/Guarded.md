# `#[Guarded]`

**Description:** Defines the attributes that are not mass assignable for an Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Guarded`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Guarded;
use Illuminate\Database\Eloquent\Model;

#[Guarded(['id', 'is_admin'])]
class User extends Model
{
}
```

Variadic form is also supported:

```php
#[Guarded('id', 'is_admin')]
class User extends Model
{
}
```

---

[← Back to README](../../README.md)
