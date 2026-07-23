# `#[UseResource]`

**Description:** Specifies the API resource class to use when transforming the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseResource`

**Added in:** Laravel 12.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\PostResource;

// Before:
// public function toResource(): PostResource
// {
//     return new PostResource($this);
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\PostResource;

// After:
#[UseResource(PostResource::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
