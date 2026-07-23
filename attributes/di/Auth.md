# `#[Auth]`

**Description:** Injects an auth guard instance into the constructor or method.

**Namespace:** `Illuminate\Container\Attributes\Auth`

**Added in:** Laravel 11.0

## Usage

```php
use Illuminate\Container\Attributes\Auth;
use Illuminate\Contracts\Auth\Guard;

// Before (service provider):
// $this->app->when(UserService::class)
//     ->needs(Guard::class)
//     ->give(fn () => Auth::guard('web'));
```

```php
use Illuminate\Container\Attributes\Auth;
use Illuminate\Contracts\Auth\Guard;

// After:
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
