# `#[ObservedBy]`

**Description:** Registers one or more observer classes for the Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\ObservedBy`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use App\Observers\UserObserver;

#[ObservedBy([UserObserver::class])]
class User extends Model
{
}
```

```php
// App\Observers\UserObserver
class UserObserver
{
    public function created(User $user): void
    {
        // Send welcome email...
    }

    public function deleted(User $user): void
    {
        // Clean up related data...
    }
}
```

---

[← Back to README](../../README.md)
