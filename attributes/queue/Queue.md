# `#[Queue]`

**Description:** Defines the queue name to dispatch the job, listener, or notification onto.

**Namespace:** `Illuminate\Queue\Attributes\Queue`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Queue;

// Before:
// public $queue = 'podcasts';
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Queue;

// After:
#[Queue('podcasts')]
class ProcessPodcast implements ShouldQueue
{
    public function handle(): void
    {
        // ...
    }
}
```

Enum values are also supported:

```php
use App\Enums\QueueName;

#[Queue(QueueName::Podcasts)]
class ProcessPodcast implements ShouldQueue
{
}
```

---

[← Back to README](../../README.md)
