# `#[WithoutIncrementing]`

**Description:** Disables auto-incrementing primary keys for the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\WithoutIncrementing`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\WithoutIncrementing;
use Illuminate\Database\Eloquent\Model;

#[WithoutIncrementing]
class ApiToken extends Model
{
    protected $keyType = 'string';
}
```

---

[← Back to README](../../README.md)
