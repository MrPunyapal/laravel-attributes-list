# `#[RedirectToRoute]`

**Description:** Defines the named route to redirect to when form request validation fails.

**Namespace:** `Illuminate\Foundation\Http\Attributes\RedirectToRoute`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Foundation\Http\Attributes\RedirectToRoute;
use Illuminate\Foundation\Http\FormRequest;

// Before:
// protected $redirectRoute = 'posts.create';
```

```php
use Illuminate\Foundation\Http\Attributes\RedirectToRoute;
use Illuminate\Foundation\Http\FormRequest;

// After:
#[RedirectToRoute('posts.create')]
class StorePostRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'body'  => ['required', 'string'],
        ];
    }
}
```

With route parameters:

```php
#[RedirectToRoute('posts.edit', ['post' => 1])]
class UpdatePostRequest extends FormRequest
{
}
```

---

[← Back to README](../../README.md)
