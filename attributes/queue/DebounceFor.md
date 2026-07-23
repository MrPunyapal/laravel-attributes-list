# `#[DebounceFor]`

**Description:** Debounces job execution — if the same job is dispatched multiple times within the given duration, only the last dispatch runs.

**Namespace:** `Illuminate\Queue\Attributes\DebounceFor`

**Added in:** Laravel 13.6

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

// Before:
// No built-in equivalent — required custom cache-based debouncing logic
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

// After:
#[DebounceFor(seconds: 30, maxWait: 60)]
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

---

[← Back to README](../../README.md)
