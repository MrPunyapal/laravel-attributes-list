# `#[StopOnFirstFailure]`

**Description:** Stops validation after the first validation failure instead of collecting all errors.

**Namespace:** `Illuminate\Foundation\Http\Attributes\StopOnFirstFailure`

## Usage

```php
use Illuminate\Foundation\Http\Attributes\StopOnFirstFailure;
use Illuminate\Foundation\Http\FormRequest;

#[StopOnFirstFailure]
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
