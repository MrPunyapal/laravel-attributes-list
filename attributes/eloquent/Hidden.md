# `#[Hidden]`

**Description:** Hides the specified attributes from model serialization (toArray / toJson).

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Hidden`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Model;

#[Hidden(['password', 'remember_token'])]
class User extends Model
{
}
```

Variadic form is also supported:

```php
#[Hidden('password', 'remember_token')]
class User extends Model
{
}
```

---

[← Back to README](../../README.md)
