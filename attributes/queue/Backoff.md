# `#[Backoff]`

**Description:** Configures the delay in seconds between job retry attempts.

**Namespace:** `Illuminate\Queue\Attributes\Backoff`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Backoff;

// Fixed delay of 10 seconds between retries
#[Backoff(10)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // ...
    }
}
```

Exponential backoff using an array:

```php
// 10s, then 30s, then 60s between retries
#[Backoff([10, 30, 60])]
class ProcessPodcast implements ShouldQueue
{
}
```

---

[← Back to README](../../README.md)
