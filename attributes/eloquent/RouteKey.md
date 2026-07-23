# `#[RouteKey]`

**Description:** Defines the route key name for an Eloquent model, replacing the default `id` column.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\RouteKey`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\RouteKey;
use Illuminate\Database\Eloquent\Model;

#[RouteKey('slug')]
class Post extends Model
{
    //
}
```

---

[← Back to README](../../README.md)
