# `#[WithoutRelations]`

**Description:** Prevents Eloquent model relations from being serialized when the job is queued. Relations will not be restored when the job is executed.

**Namespace:** `Illuminate\Queue\Attributes\WithoutRelations`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\WithoutRelations;
use App\Models\User;

#[WithoutRelations]
class SendWelcomeEmail implements ShouldQueue
{
    public function __construct(
        public readonly User $user
    ) {}

    public function handle(): void
    {
        // $user->roles will not be pre-loaded
    }
}
```

Can also be applied to individual constructor parameters:

```php
class SendWelcomeEmail implements ShouldQueue
{
    public function __construct(
        #[WithoutRelations] public readonly User $user
    ) {}
}
```

---

[← Back to README](../../README.md)
