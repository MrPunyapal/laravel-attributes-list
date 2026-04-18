# `#[Timeout]`

**Description:** Defines the number of seconds the job is allowed to run before it is killed.

**Namespace:** `Illuminate\Queue\Attributes\Timeout`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Timeout;

#[Timeout(120)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // ...
    }
}
```

---

[← Back to README](../../README.md)
