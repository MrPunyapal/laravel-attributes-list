# `#[Collects]`

**Description:** Defines the resource class that a resource collection wraps, used for automatic collection mapping.

**Namespace:** `Illuminate\Http\Resources\Json\Collects`

## Usage

```php
use Illuminate\Http\Resources\Json\Collects;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\UserResource;

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
