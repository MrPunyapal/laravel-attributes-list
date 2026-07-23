# `#[Signature]`

**Description:** Defines the Artisan command signature, including the command name and its arguments and options.

**Namespace:** `Illuminate\Console\Attributes\Signature`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// Before:
// protected $signature = 'mail:send {user} {--queue}';
```

```php
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// After:
#[Signature('mail:send {user} {--queue}')]
class SendMailCommand extends Command
{
    public function handle(): void
    {
        $user = $this->argument('user');
    }
}
```

---

[← Back to README](../../README.md)
