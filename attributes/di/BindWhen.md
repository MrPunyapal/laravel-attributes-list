# `#[BindWhen]`

**Description:** Conditionally binds an interface or abstract class to a concrete implementation when a callback returns `true`.

**Namespace:** `Illuminate\Container\Attributes\BindWhen`

**Added in:** Laravel 13.22  
**Note:** Closures in attribute arguments require PHP 8.5.

## Usage

```php
use Illuminate\Container\Attributes\Bind;
use Illuminate\Container\Attributes\BindWhen;

// Before (service provider):
$this->app->bind(PaymentGateway::class, function ($app) {
    return $app->make('config')->get('features.payments.beta')
        ? $app->make(BetaPaymentGateway::class)
        : $app->make(StripePaymentGateway::class);
});
```

```php
use Illuminate\Container\Attributes\Bind;
use Illuminate\Container\Attributes\BindWhen;

// After:
#[BindWhen(BetaPaymentGateway::class, static function ($app) {
    return $app->make('config')->get('features.payments.beta');
})]
#[Bind(StripePaymentGateway::class)]
interface PaymentGateway
{
    //
}

class BetaPaymentGateway implements PaymentGateway
{
    //
}

class StripePaymentGateway implements PaymentGateway
{
    //
}
```

The callback receives the container so the condition can depend on configuration, feature flags, or any value resolvable at runtime. `#[BindWhen]` is repeatable; conditional bindings are evaluated in declaration order and can be placed before a default `#[Bind]` fallback.

---

[← Back to README](../../README.md)
