# `#[Connection]`

**Description:** Defines the queue connection to dispatch the job, listener, or notification on.

**Namespace:** `Illuminate\Queue\Attributes\Connection`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Connection;

// Before:
// public $connection = 'redis';
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Connection;

// After:
#[Connection('redis')]
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
use App\Enums\QueueConnection;

#[Connection(QueueConnection::Redis)]
class ProcessPodcast implements ShouldQueue
{
}
```

---

[← Back to README](../../README.md)
