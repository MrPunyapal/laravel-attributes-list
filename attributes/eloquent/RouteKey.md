# `#[RouteKey]`

**Description:** Defines the route key name for an Eloquent model, replacing the default `id` column.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\RouteKey`

**Added in:** Laravel 13.21

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\RouteKey;
use Illuminate\Database\Eloquent\Model;

// Before:
// public function getRouteKeyName(): string
// {
//     return 'slug';
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\RouteKey;
use Illuminate\Database\Eloquent\Model;

// After:
#[RouteKey('slug')]
class Post extends Model
{
    //
}
```

---

[← Back to README](../../README.md)
