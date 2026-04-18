# `#[Signature]`

**Description:** Defines the Artisan command signature, including the command name and its arguments and options.

**Namespace:** `Illuminate\Console\Attributes\Signature`

## Usage

```php
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('mail:send {user} {--queue}')]
class SendMailCommand extends Command
{
    public function handle(): void
    {
        $user = $this->argument('user');

        // ...
    }
}
```

---

[← Back to README](../../README.md)
