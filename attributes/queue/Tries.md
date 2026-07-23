# `#[Tries]`

**Description:** Defines the maximum number of times the job should be attempted before failing.

**Namespace:** `Illuminate\Queue\Attributes\Tries`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Tries;

// Before:
// public $tries = 3;
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Tries;

// After:
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
