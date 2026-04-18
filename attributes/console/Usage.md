# `#[Usage]`

**Description:** Adds additional usage examples shown in the command's help output.

**Namespace:** `Illuminate\Console\Attributes\Usage`

## Usage

```php
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Attributes\Usage;
use Illuminate\Console\Command;

#[Signature('mail:send {user}')]
#[Usage('mail:send 1')]
#[Usage('mail:send 1 --queue')]
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
