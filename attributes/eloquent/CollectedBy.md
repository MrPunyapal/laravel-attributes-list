# `#[CollectedBy]`

**Description:** Specifies a custom Eloquent collection class to use when retrieving multiple models.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\CollectedBy`

**Added in:** Laravel 12.x

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\CollectedBy;
use Illuminate\Database\Eloquent\Model;
use App\Collections\PostCollection;

// Before:
// public function newCollection(array $models = [])
// {
//     return new PostCollection($models);
// }
```

```php
use Illuminate\Database\Eloquent\Attributes\CollectedBy;
use Illuminate\Database\Eloquent\Model;
use App\Collections\PostCollection;

// After:
#[CollectedBy(PostCollection::class)]
class Post extends Model
{
}
```

```php
// App\Collections\PostCollection
use Illuminate\Database\Eloquent\Collection;

class PostCollection extends Collection
{
    public function published(): static
    {
        return $this->filter(fn ($post) => $post->is_published);
    }
}
```

---

[← Back to README](../../README.md)
