# `#[StopOnFirstFailure]`

**Description:** Stops validation after the first validation failure instead of collecting all errors.

**Namespace:** `Illuminate\Foundation\Http\Attributes\StopOnFirstFailure`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Foundation\Http\Attributes\StopOnFirstFailure;
use Illuminate\Foundation\Http\FormRequest;

// Before:
// protected $stopOnFirstFailure = true;
```

```php
use Illuminate\Foundation\Http\Attributes\StopOnFirstFailure;
use Illuminate\Foundation\Http\FormRequest;

// After:
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
