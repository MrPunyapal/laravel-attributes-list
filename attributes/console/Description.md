# `#[Description]`

**Description:** Sets the description for the Artisan command, shown in `php artisan list`.

**Namespace:** `Illuminate\Console\Attributes\Description`

## Usage

```php
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

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
