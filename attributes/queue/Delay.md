# `#[Delay]`

**Description:** Delays the job execution by the given number of seconds. Supported on jobs, listeners, notifications, and mailables.

**Namespace:** `Illuminate\Queue\Attributes\Delay`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Delay;

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
