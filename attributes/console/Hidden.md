# `#[Hidden]`

**Description:** Hides the command from the `php artisan list` output. The command can still be run directly.

**Namespace:** `Illuminate\Console\Attributes\Hidden`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Console\Attributes\Hidden;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// Before:
// protected $hidden = true;
```

```php
use Illuminate\Console\Attributes\Hidden;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

// After:
#[Signature('internal:sync')]
#[Hidden]
class SyncInternalDataCommand extends Command
{
    public function handle(): void
    {
        // This command won't appear in `php artisan list`
        // but can still be run via: php artisan internal:sync
    }
}
```

---

[← Back to README](../../README.md)
