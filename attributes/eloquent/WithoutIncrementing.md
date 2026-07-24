# `#[WithoutIncrementing]`

**Description:** Disables auto-incrementing primary keys for the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\WithoutIncrementing`

**Added in:** Laravel 13.2

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\WithoutIncrementing;
use Illuminate\Database\Eloquent\Model;

// Before:
// public $incrementing = false;
```

```php
use Illuminate\Database\Eloquent\Attributes\WithoutIncrementing;
use Illuminate\Database\Eloquent\Model;

// After:
#[WithoutIncrementing]
class ApiToken extends Model
{
    protected $keyType = 'string';
}
```

---

[← Back to README](../../README.md)
