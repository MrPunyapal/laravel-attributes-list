# `#[Help]`

**Description:** Sets the help text for the Artisan command, shown when running `php artisan help {command}`.

**Namespace:** `Illuminate\Console\Attributes\Help`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Console\Attributes\Help;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// Before:
// protected $help = 'Dispatches a marketing email to the given user ID.';
```

```php
use Illuminate\Console\Attributes\Help;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// After:
#[Signature('mail:send {user}')]
#[Help('Dispatches a marketing email to the given user ID. Pass --queue to run in background.')]
class SendMailCommand extends Command
{
    public function handle(): void
    {
        // ...
    }
}
```

---

[← Back to README](../../README.md)
