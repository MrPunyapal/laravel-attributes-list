# `#[WithoutRelations]`

**Description:** Prevents Eloquent model relations from being serialized when the job is queued. Relations will not be restored when the job is executed.

**Namespace:** `Illuminate\Queue\Attributes\WithoutRelations`

**Added in:** Laravel 10.16

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\WithoutRelations;
use App\Models\User;

// Before:
// public function __construct(User $user)
// {
//     $this->user = $user->withoutRelations();
// }
```

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\WithoutRelations;
use App\Models\User;

// After:
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
