# `#[CountCrashesAsExceptions]`

**Description:** Counts attempts that never finished because the worker crashed (for example, the process was killed by the OOM killer) towards the job's `maxExceptions` limit.

**Namespace:** `Illuminate\Queue\Attributes\CountCrashesAsExceptions`

**Added in:** Laravel 13.34

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;

// Before:
class ProcessPodcast implements ShouldQueue
{
    public $maxExceptions = 3;

    public $countCrashesAsExceptions = true;

    public function handle(): void
    {
        // Job fails after 3 unhandled exceptions or worker crashes
    }
}
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\CountCrashesAsExceptions;
use Illuminate\Queue\Attributes\MaxExceptions;

// After:
#[MaxExceptions(3)]
#[CountCrashesAsExceptions]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // Job fails after 3 unhandled exceptions or worker crashes
    }
}
```

The job must also define `maxExceptions`, and the worker must have a cache store available, since an in-progress marker is kept in the cache to detect attempts that never completed.

---

[← Back to README](../../README.md)
