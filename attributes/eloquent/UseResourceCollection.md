# `#[UseResourceCollection]`

**Description:** Specifies the API resource collection class to use when transforming a collection of models.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UseResourceCollection`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UseResourceCollection;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\PostCollection;

#[UseResourceCollection(PostCollection::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
