# `#[Visible]`

**Description:** Defines the attributes that should be visible in model serialization (toArray / toJson).

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Visible`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Visible;
use Illuminate\Database\Eloquent\Model;

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
