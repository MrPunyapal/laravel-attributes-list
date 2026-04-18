# `#[Aliases]`

**Description:** Defines one or more aliases for the Artisan command.

**Namespace:** `Illuminate\Console\Attributes\Aliases`

## Usage

```php
use Illuminate\Console\Attributes\Aliases;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

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
