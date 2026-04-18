# `#[Help]`

**Description:** Sets the help text for the Artisan command, shown when running `php artisan help {command}`.

**Namespace:** `Illuminate\Console\Attributes\Help`

## Usage

```php
use Illuminate\Console\Attributes\Help;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

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
