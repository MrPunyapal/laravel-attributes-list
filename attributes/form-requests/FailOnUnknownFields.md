# `#[FailOnUnknownFields]`

**Description:** Fails the form request validation if the request contains any fields not defined in the `rules()` method.

**Namespace:** `Illuminate\Foundation\Http\Attributes\FailOnUnknownFields`

**Added in:** Laravel 13.4

## Usage

```php
use Illuminate\Foundation\Http\Attributes\FailOnUnknownFields;
use Illuminate\Foundation\Http\FormRequest;

// Before:
// No direct property equivalent — required custom validation logic
```

```php
use Illuminate\Foundation\Http\Attributes\FailOnUnknownFields;
use Illuminate\Foundation\Http\FormRequest;

// After:
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
