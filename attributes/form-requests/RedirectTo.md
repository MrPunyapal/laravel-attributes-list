# `#[RedirectTo]`

**Description:** Defines the URL to redirect to when form request validation fails.

**Namespace:** `Illuminate\Foundation\Http\Attributes\RedirectTo`

## Usage

```php
use Illuminate\Foundation\Http\Attributes\RedirectTo;
use Illuminate\Foundation\Http\FormRequest;

#[RedirectTo('/posts/create')]
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

---

[← Back to README](../../README.md)
