# `#[UseResource]`

**Description:** Specifies the API resource class to use when transforming the model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseResource`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\PostResource;

#[UseResource(PostResource::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
