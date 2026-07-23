# `#[Delay]`

**Description:** Delays the job execution by the given number of seconds. Supported on jobs, listeners, notifications, and mailables.

**Namespace:** `Illuminate\Queue\Attributes\Delay`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Delay;

// Before:
// public $delay = 60;
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Delay;

// After:
#[Delay(60)]
class SendWelcomeEmail implements ShouldQueue
{
    public function handle(): void
    {
        // Runs 60 seconds after dispatch
    }
}
```

Also works on mailables:

```php
use Illuminate\Mail\Mailable;
use Illuminate\Contracts\Queue\ShouldQueue;

#[Delay(30)]
class WelcomeEmail extends Mailable implements ShouldQueue
{
}
```

---

[← Back to README](../../README.md)
