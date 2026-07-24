# `#[WithoutTimestamps]`

**Description:** Disables automatic `created_at` and `updated_at` timestamp management for the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\WithoutTimestamps`

**Added in:** Laravel 13.2

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;

// Before:
// public $timestamps = false;
```

```php
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;

// After:
#[WithoutTimestamps]
class EventLog extends Model
{
}
```

---

[← Back to README](../../README.md)
