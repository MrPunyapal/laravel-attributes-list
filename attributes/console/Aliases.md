# `#[Aliases]`

**Description:** Defines one or more aliases for the Artisan command.

**Namespace:** `Illuminate\Console\Attributes\Aliases`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Console\Attributes\Aliases;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// Before:
// protected $aliases = ['ms', 'send-mail'];
```

```php
use Illuminate\Console\Attributes\Aliases;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// After:
#[Signature('mail:send {user}')]
#[Aliases(['ms', 'send-mail'])]
class SendMailCommand extends Command
{
    public function handle(): void
    {
        // Can now run as: php artisan ms {user}
    }
}
```

---

[← Back to README](../../README.md)
