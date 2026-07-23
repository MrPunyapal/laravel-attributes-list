# `#[Timeout]`

**Description:** Defines the number of seconds the job is allowed to run before it is killed.

**Namespace:** `Illuminate\Queue\Attributes\Timeout`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Timeout;

// Before:
// public $timeout = 120;
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Timeout;

// After:
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
