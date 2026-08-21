# `#[DebounceFor]`

**Description:** Debounces queued execution. If the same job or listener is dispatched multiple times within the given duration, only the last dispatch runs.

**Namespace:** `Illuminate\Queue\Attributes\DebounceFor`

**Added in:** Laravel 13.6

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

// Before:
No built-in equivalent, required custom cache-based debouncing logic
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

// After:
#[DebounceFor(30, maxWait: 60)]
class SyncUserToMailchimp implements ShouldQueue
{
    public function __construct(
        public readonly int $userId
    ) {}

    public function handle(): void
    {
        // If dispatched multiple times in 30s, only the last dispatch runs
    }
}
```

Works on queued event listeners too. The listener must implement `ShouldQueue`, otherwise it runs synchronously and the attribute is ignored:

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

#[DebounceFor(30, maxWait: 60)]
class SendOrderConfirmation implements ShouldQueue
{
    public function handle(OrderShipped $event): void
    {
        // If the event fires multiple times in 30s, only the last listener run is queued
    }
}
```

You may scope the debounce with a `debounceId()` method or `$debounceId` property, and pick a cache store with `debounceVia()`. A class that implements `ShouldBeUnique` cannot also be debounced.

---

[← Back to README](../../README.md)
