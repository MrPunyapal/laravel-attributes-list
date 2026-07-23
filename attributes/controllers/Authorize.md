# `#[Authorize]`

**Description:** Authorizes a controller action using the Gate, providing a clean alternative to `Gate::authorize()` or form request `authorize()`.

**Namespace:** `Illuminate\Routing\Attributes\Controllers\Authorize`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Routing\Attributes\Controllers\Authorize;

// Before:
// $this->authorize('create', Comment::class);
```

```php
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Routing\Attributes\Controllers\Authorize;

// After:
class CommentController
{
    #[Authorize('create', [Comment::class, 'post'])]
    public function store(StoreCommentRequest $request, Post $post)
    {
        // ...
    }

    #[Authorize('delete', 'comment')]
    public function destroy(Comment $comment)
    {
        // ...
    }
}
```

---

[← Back to README](../../README.md)
