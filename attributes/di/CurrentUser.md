# `#[CurrentUser]`

**Description:** Injects the currently authenticated user model instance, resolved via the auth user resolver.

**Namespace:** `Illuminate\Container\Attributes\CurrentUser`

## Usage

```php
use Illuminate\Container\Attributes\CurrentUser;
use App\Models\User;

class OrderService
{
    public function __construct(
        #[CurrentUser] private readonly ?User $user
    ) {}

    public function placeOrder(array $data): Order
    {
        return $this->user->orders()->create($data);
    }
}
```

---

> [!NOTE]
> The `#[CurrentUser]` currently just alias of `#[Authenticated]`.

[← Back to README](../../README.md)
