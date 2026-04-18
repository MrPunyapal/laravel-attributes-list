# `#[Connection]`

**Description:** Specifies the database connection to use for the Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Connection`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Connection;
use Illuminate\Database\Eloquent\Model;

#[Connection('pgsql')]
class Order extends Model
{
}
```

Enum values are also supported:

```php
use App\Enums\DatabaseConnection;

#[Connection(DatabaseConnection::Pgsql)]
class Order extends Model
{
}
```

---

[← Back to README](../../README.md)
