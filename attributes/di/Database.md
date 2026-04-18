# `#[Database]`

**Description:** Injects a named database connection instance. Similar to `#[DB]` but also accepts enum values.

**Namespace:** `Illuminate\Container\Attributes\Database`

## Usage

```php
use Illuminate\Container\Attributes\Database;
use Illuminate\Database\Connection;

class ReportService
{
    public function __construct(
        #[Database('pgsql')] private readonly Connection $connection
    ) {}
}
```

Enum values are also supported:

```php
use App\Enums\DatabaseConnection;

class ReportService
{
    public function __construct(
        #[Database(DatabaseConnection::Pgsql)] private readonly Connection $connection
    ) {}
}
```

---

[← Back to README](../../README.md)
