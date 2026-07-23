# `#[Collects]`

**Description:** Defines the resource class that a resource collection wraps, used for automatic collection mapping.

**Namespace:** `Illuminate\Http\Resources\Attributes\Collects`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Http\Resources\Attributes\Collects;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\UserResource;

// Before:
// public $collects = UserResource::class;
```

```php
use Illuminate\Http\Resources\Attributes\Collects;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\UserResource;

// After:
#[Collects(UserResource::class)]
class UserCollection extends ResourceCollection
{
    public function toArray($request): array
    {
        return parent::toArray($request);
    }
}
```

---

[← Back to README](../../README.md)
