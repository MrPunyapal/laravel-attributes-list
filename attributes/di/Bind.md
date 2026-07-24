# `#[Bind]`

**Description:** Binds an interface or abstract class to a concrete implementation.

**Namespace:** `Illuminate\Container\Attributes\Bind`

**Added in:** Laravel 12.22

## Usage

```php
use Illuminate\Container\Attributes\Bind;

// Before (service provider):
// $this->app->bind(PaymentGateway::class, StripeGateway::class);
```

```php
use Illuminate\Container\Attributes\Bind;

// After:
#[Bind(StripeGateway::class)]
interface PaymentGateway
{
}

class StripeGateway implements PaymentGateway
{
}
```

Laravel automatically injects `StripeGateway` when resolving `PaymentGateway`.

---

[← Back to README](../../README.md)
