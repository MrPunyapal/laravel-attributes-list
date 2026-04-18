# `#[Log]`

**Description:** Injects a logger instance with an optional named channel for better log organization.

**Namespace:** `Illuminate\Container\Attributes\Log`

## Usage

```php
use Illuminate\Container\Attributes\Log;
use Psr\Log\LoggerInterface;

class PaymentService
{
    public function __construct(
        #[Log(channel: 'payments', name: 'custom_logger')] private readonly LoggerInterface $logger
    ) {}

    public function charge(int $amount): void
    {
        $this->logger->info('Charging customer', ['amount' => $amount]);
        // Logged under the 'payments' channel
    }
}
```

Without a channel name, it injects the default logger:

```php
#[Log] private readonly LoggerInterface $logger
```

---

[← Back to README](../../README.md)
