# `#[Connection]`

**Description:** Specifies the database connection to use for the Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Connection`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Connection;
use Illuminate\Database\Eloquent\Model;

// Before:
// protected $connection = 'pgsql';
```

```php
use Illuminate\Database\Eloquent\Attributes\Connection;
use Illuminate\Database\Eloquent\Model;

// After:
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
