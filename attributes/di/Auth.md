# `#[Auth]`

**Description:** Injects an auth guard instance into the constructor or method.

**Namespace:** `Illuminate\Container\Attributes\Auth`

## Usage

```php
use Illuminate\Container\Attributes\Auth;
use Illuminate\Contracts\Auth\Guard;

class UserService
{
    public function __construct(
        #[Auth('web')] private readonly Guard $guard
    ) {}

    public function currentUser()
    {
        return $this->guard->user();
    }
}
```

---

[← Back to README](../../README.md)
