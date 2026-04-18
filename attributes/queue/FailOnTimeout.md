# `#[FailOnTimeout]`

**Description:** Marks the job as failed when it exceeds its timeout limit, instead of being released back onto the queue.

**Namespace:** `Illuminate\Queue\Attributes\FailOnTimeout`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\FailOnTimeout;
use Illuminate\Queue\Attributes\Timeout;

#[FailOnTimeout]
#[Timeout(30)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // If this runs longer than 30s, the job is marked as failed
    }
}
```

---

[← Back to README](../../README.md)
