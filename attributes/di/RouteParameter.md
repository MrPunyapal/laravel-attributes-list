# `#[RouteParameter]`

**Description:** Injects a route parameter value directly into a service constructor or method, resolved from the current request.

**Namespace:** `Illuminate\Container\Attributes\RouteParameter`

**Added in:** Laravel 11.0

## Usage

```php
use Illuminate\Container\Attributes\RouteParameter;
use App\Models\Post;

// Before:
// $post = request()->route('post');
```

```php
use Illuminate\Container\Attributes\RouteParameter;
use App\Models\Post;

// After:
class PostService
{
    public function __construct(
        #[RouteParameter('post')] private readonly Post $post
    ) {}

    public function getComments()
    {
        return $this->post->comments;
    }
}
```

---

[← Back to README](../../README.md)
