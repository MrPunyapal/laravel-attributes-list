# `#[WithoutTimestamps]`

**Description:** Disables automatic `created_at` and `updated_at` timestamp management for the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\WithoutTimestamps`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;

#[WithoutTimestamps]
class EventLog extends Model
{
}
```

---

[← Back to README](../../README.md)
