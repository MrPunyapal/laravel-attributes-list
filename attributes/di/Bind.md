# `#[Bind]`

**Description:** Binds an interface or abstract class to a concrete implementation.

**Namespace:** `Illuminate\Container\Attributes\Bind`

## Usage

```php
use Illuminate\Container\Attributes\Bind;

#[Bind(StripeGateway::class)]
interface PaymentGateway
{
}

class StripeGateway implements PaymentGateway
{
}

class CheckoutController
{
    public function __construct(
        private PaymentGateway $gateway
    ) {}
}
```

Laravel automatically injects `StripeGateway` when resolving `PaymentGateway`.

---

[← Back to README](../../README.md)
