# `#[Queue]`

**Description:** Defines the queue name to dispatch the job, listener, or notification onto.

**Namespace:** `Illuminate\Queue\Attributes\Queue`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Queue;

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
