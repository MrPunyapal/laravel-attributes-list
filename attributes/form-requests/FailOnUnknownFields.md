# `#[FailOnUnknownFields]`

**Description:** Fails the form request validation if the request contains any fields not defined in the `rules()` method.

**Namespace:** `Illuminate\Foundation\Http\Attributes\FailOnUnknownFields`

## Usage

```php
use Illuminate\Foundation\Http\Attributes\FailOnUnknownFields;
use Illuminate\Foundation\Http\FormRequest;

#[FailOnUnknownFields]
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

If the request contains an unexpected field like `is_admin`, validation will fail automatically.

---

[← Back to README](../../README.md)
