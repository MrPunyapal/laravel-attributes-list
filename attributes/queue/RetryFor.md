# `#[RetryFor]`

**Description:** Specifies the duration in seconds during which a job may be retried before it is considered failed.

**Namespace:** `Illuminate\Queue\Attributes\RetryFor`

**Added in:** Laravel 13.37

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;

// Before:
public $retryUntil = null;

public function retryUntil()
{
    return now()->addHour();
}
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\RetryFor;

// After (retry for one hour):
#[RetryFor(hours: 1)]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // Job will be retried for 1 hour, then marked as failed
    }
}
```

You may specify the duration using seconds, minutes, or hours:

```php
// 3600 seconds (1 hour)
#[RetryFor(seconds: 3600)]
class ProcessPodcast implements ShouldQueue { }

// 60 minutes (1 hour)
#[RetryFor(minutes: 60)]
class ProcessPodcast implements ShouldQueue { }
```

---

[← Back to README](../../README.md)
