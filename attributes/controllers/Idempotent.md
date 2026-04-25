# `#[Idempotent]`

**Description:** Applies HTTP idempotency middleware to a controller class or individual action methods. Replays the original response when the same `Idempotency-Key` header is sent with identical request data, preventing duplicate processing of `POST`, `PUT`, and `PATCH` requests.

> **Requires:** [`wendelladriel/laravel-idempotency`](https://github.com/WendellAdriel/laravel-idempotency)
> ```
> composer require wendelladriel/laravel-idempotency
> ```

**Namespace:** `WendellAdriel\Idempotency\Attributes\Idempotent`

## Usage

Applied to the entire controller (all methods inherit idempotency):

```php
use WendellAdriel\Idempotency\Attributes\Idempotent;

#[Idempotent]
class OrderController
{
    public function store() { /* ... */ }
    public function update() { /* ... */ }
}
```

Applied with `only` / `except` restrictions:

```php
#[Idempotent(except: ['index', 'show'])]
class PaymentController
{
    public function index() { /* ... */ }  // skipped
    public function store() { /* ... */ }  // protected
    public function update() { /* ... */ } // protected
}
```

Applied to an individual method with custom options:

```php
use WendellAdriel\Idempotency\Attributes\Idempotent;
use WendellAdriel\Idempotency\Enums\IdempotencyScope;

class PaymentController
{
    #[Idempotent(
        ttl: 600,
        lockTimeout: 30,
        required: true,
        scope: IdempotencyScope::Ip,
        header: 'X-Idempotency-Key',
    )]
    public function store() { /* ... */ }
}
```

Mixed class-level and method-level (method overrides class defaults):

```php
#[Idempotent]
class OrderController
{
    #[Idempotent(ttl: 600, scope: IdempotencyScope::Ip)]
    public function store() { /* ... */ } // uses method options

    public function update() { /* ... */ } // uses class options
}
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `ttl` | `int` | `3600` | Seconds to cache the response |
| `lockTimeout` | `int` | `10` | Seconds to hold the in-flight atomic lock |
| `required` | `bool` | `true` | Whether the idempotency header is required |
| `scope` | `IdempotencyScope` | `User` | Key segmentation: `User`, `Ip`, or `Global` |
| `header` | `string` | `'Idempotency-Key'` | Request header name to inspect |
| `only` | `array` | `[]` | Restrict to specific method names |
| `except` | `array` | `[]` | Exclude specific method names |

---

[← Back to README](../../README.md)