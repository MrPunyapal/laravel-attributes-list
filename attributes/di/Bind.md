# `#[Bind]`

**Description:** Contextually binds a specific implementation to an interface or abstract type for the annotated parameter.

**Namespace:** `Illuminate\Container\Attributes\Bind`

## Usage

```php
use Illuminate\Container\Attributes\Bind;
use App\Contracts\PaymentGateway;
use App\Services\StripeGateway;

class CheckoutController
{
    public function __construct(
        #[Bind(StripeGateway::class)] private readonly PaymentGateway $gateway
    ) {}
}
```

---

[← Back to README](../../README.md)
