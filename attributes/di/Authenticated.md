# `#[Authenticated]`

**Description:** Injects the currently authenticated user from the default guard.

**Namespace:** `Illuminate\Container\Attributes\Authenticated`

**Added in:** Laravel 11.20

## Usage

```php
use Illuminate\Container\Attributes\Authenticated;
use App\Models\User;

// Before:
// $user = Auth::user();
```

```php
use Illuminate\Container\Attributes\Authenticated;
use App\Models\User;

// After:
class ProfileController
{
    public function show(
        #[Authenticated] User $user
    ) {
        return view('profile', compact('user'));
    }
}
```

---

[← Back to README](../../README.md)
