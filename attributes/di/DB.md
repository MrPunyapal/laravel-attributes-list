# `#[DB]`

**Description:** Injects a database connection instance by name.

**Namespace:** `Illuminate\Container\Attributes\DB`

## Usage

```php
use Illuminate\Container\Attributes\DB;
use Illuminate\Database\Connection;

class ReportService
{
    public function __construct(
        #[DB('pgsql')] private readonly Connection $db
    ) {}

    public function generateReport(): array
    {
        return $this->db->select('SELECT * FROM reports');
    }
}
```

---

> [!NOTE]
> The `#[DB]` currently just alias of `#[Database]`.

[← Back to README](../../README.md)
