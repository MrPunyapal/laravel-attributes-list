# `#[DebounceFor]`

**Description:** Debounces job execution — if the same job is dispatched multiple times within the given duration, only the last dispatch runs.

**Namespace:** `Illuminate\Queue\Attributes\DebounceFor`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DebounceFor;

#[DebounceFor(seconds: 30)]
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
