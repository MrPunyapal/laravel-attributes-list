# `#[BindWhen]`

**Description:** Conditionally binds an interface or abstract class to a concrete implementation when a container callback returns `true`.

**Namespace:** `Illuminate\Container\Attributes\BindWhen`

**Added in:** Laravel 13.22

## Usage

```php
use Illuminate\Container\Attributes\BindWhen;

#[BindWhen(BetaPaymentGateway::class, static function ($container) {
    return $container->make('config')->get('features.payments.beta');
})]
interface PaymentGateway
{
}
```

The callback receives the container, so the condition can depend on configuration, feature flags, or another value resolvable at runtime. `#[BindWhen]` is repeatable; conditional bindings are evaluated in declaration order and can be placed before a default `#[Bind]` fallback.

> **Note:** Closures in attribute arguments require PHP 8.5.

---

[← Back to README](../../README.md)
