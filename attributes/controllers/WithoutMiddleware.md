# `#[WithoutMiddleware]`

**Description:** Excludes middleware from a controller class or individual action methods. Can be combined with `only` and `except` options.

**Namespace:** `Illuminate\Routing\Attributes\Controllers\WithoutMiddleware`

**Added in:** Laravel 13.20

## Usage

```php
use Illuminate\Routing\Attributes\Controllers\WithoutMiddleware;

// Before (controller constructor):
// public function __construct()
// {
//     $this->withoutMiddleware('auth');
// }
```

```php
use Illuminate\Routing\Attributes\Controllers\WithoutMiddleware;

// After:
#[WithoutMiddleware('auth')]
class UserController
{
    public function index() { /* ... */ }
    public function store() { /* ... */ }
}
```

Applied with `only` / `except` restrictions:

```php
#[WithoutMiddleware('auth')]
#[WithoutMiddleware('throttle:60,1', only: ['store'])]
#[WithoutMiddleware('subscribed', except: ['index'])]
class UserController
{
    public function index() { /* ... */ }
    public function store() { /* ... */ }
}
```

Applied to individual methods:

```php
#[WithoutMiddleware('auth')]
class UserController
{
    #[WithoutMiddleware('verified')]
    public function store() { /* ... */ }

    public function index() { /* ... */ }
}
```

---

[← Back to README](../../README.md)
