# `#[UsePolicy]`

**Description:** Specifies the policy class to use for the model, overriding automatic policy discovery.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\UsePolicy`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Model;
use App\Policies\PostPolicy;

#[UsePolicy(PostPolicy::class)]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
