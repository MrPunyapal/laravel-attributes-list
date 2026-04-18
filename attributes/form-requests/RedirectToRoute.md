# `#[RedirectToRoute]`

**Description:** Defines the named route to redirect to when form request validation fails.

**Namespace:** `Illuminate\Foundation\Http\Attributes\RedirectToRoute`

## Usage

```php
use Illuminate\Foundation\Http\Attributes\RedirectToRoute;
use Illuminate\Foundation\Http\FormRequest;

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
