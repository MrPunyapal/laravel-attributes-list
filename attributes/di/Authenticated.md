# `#[Authenticated]`

**Description:** Injects the currently authenticated user from the default guard.

**Namespace:** `Illuminate\Container\Attributes\Authenticated`

## Usage

```php
use Illuminate\Container\Attributes\Authenticated;
use App\Models\User;

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
