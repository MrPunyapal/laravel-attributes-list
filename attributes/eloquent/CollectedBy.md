# `#[CollectedBy]`

**Description:** Specifies a custom Eloquent collection class to use when retrieving multiple models.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\CollectedBy`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\CollectedBy;
use Illuminate\Database\Eloquent\Model;
use App\Collections\PostCollection;

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
