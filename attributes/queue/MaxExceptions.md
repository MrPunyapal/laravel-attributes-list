# `#[MaxExceptions]`

**Description:** Defines the maximum number of unhandled exceptions allowed before the job is marked as failed.

**Namespace:** `Illuminate\Queue\Attributes\MaxExceptions`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\MaxExceptions;
use Illuminate\Queue\Attributes\Tries;

// Before:
// public $maxExceptions = 3;
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\MaxExceptions;
use Illuminate\Queue\Attributes\Tries;

// After:
#[Tries(10)]
#[MaxExceptions(3)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // Job can retry up to 10 times, but fails after 3 unhandled exceptions
    }
}
```

---

[← Back to README](../../README.md)
