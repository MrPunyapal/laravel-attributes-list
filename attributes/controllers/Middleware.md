# `#[Middleware]`

**Description:** Assigns middleware to a controller class or individual action methods. Can be combined with `only` and `except` options.

**Namespace:** `Illuminate\Routing\Attributes\Controllers\Middleware`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Routing\Attributes\Controllers\Middleware;

// Before (controller constructor):
// public function __construct()
// {
//     $this->middleware('auth');
//     $this->middleware('throttle:60,1')->only('store');
// }
```

```php
use Illuminate\Routing\Attributes\Controllers\Middleware;

// After:
#[Middleware('auth')]
class UserController
{
    public function index() { /* ... */ }
    public function store() { /* ... */ }
}
```

Applied with `only` / `except` restrictions:

```php
#[Middleware('auth')]
#[Middleware('throttle:60,1', only: ['store'])]
#[Middleware('subscribed', except: ['index'])]
class UserController
{
    public function index() { /* ... */ }
    public function store() { /* ... */ }
}
```

Applied to individual methods:

```php
#[Middleware('auth')]
class UserController
{
    #[Middleware('verified')]
    public function store() { /* ... */ }

    public function index() { /* ... */ }
}
```

---

[← Back to README](../../README.md)
