# `#[Tries]`

**Description:** Defines the maximum number of times the job should be attempted before failing.

**Namespace:** `Illuminate\Queue\Attributes\Tries`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Tries;

#[Tries(3)]
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
