# `#[Middleware]`

**Description:** Assigns middleware to a controller class or individual action methods. Can be combined with `only` and `except` options.

**Namespace:** `Illuminate\Routing\Attributes\Controllers\Middleware`

## Usage

Applied to the entire controller:

```php
use Illuminate\Routing\Attributes\Controllers\Middleware;

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
