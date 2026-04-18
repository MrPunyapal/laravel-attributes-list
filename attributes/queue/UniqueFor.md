# `#[UniqueFor]`

**Description:** Ensures only one instance of the job is queued at a time for the given duration (in seconds).

**Namespace:** `Illuminate\Queue\Attributes\UniqueFor`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\UniqueFor;

#[UniqueFor(3600)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // Only one instance can be queued per hour
    }
}
```

---

[← Back to README](../../README.md)
