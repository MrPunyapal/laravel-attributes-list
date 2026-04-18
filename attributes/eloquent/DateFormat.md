# `#[DateFormat]`

**Description:** Defines the format used when storing and retrieving date/timestamp columns.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\DateFormat`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\DateFormat;
use Illuminate\Database\Eloquent\Model;

#[DateFormat('U')]
class Event extends Model
{
}
```

```php
// Using a custom date format string
#[DateFormat('Y-m-d')]
class Appointment extends Model
{
}
```

---

[← Back to README](../../README.md)
