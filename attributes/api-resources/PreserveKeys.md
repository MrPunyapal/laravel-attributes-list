# `#[PreserveKeys]`

**Description:** Preserves the original array keys when serializing a JSON resource collection.

**Namespace:** `Illuminate\Http\Resources\Attributes\PreserveKeys`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Attributes\PreserveKeys;

// Before:
// public $preserveKeys = true;
```

```php
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Attributes\PreserveKeys;

// After:
#[PreserveKeys]
class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'email' => $this->email,
        ];
    }
}
```

---

[← Back to README](../../README.md)
