# `#[Description]`

**Description:** Sets the description for the Artisan command, shown in `php artisan list`.

**Namespace:** `Illuminate\Console\Attributes\Description`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// Before:
// protected $description = 'Send a marketing email to a user';
```

```php
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// After:
#[Signature('mail:send {user}')]
#[Description('Send a marketing email to a user')]
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
