# `#[ErrorBag]`

**Description:** Defines the named error bag to use when storing validation errors for this form request.

**Namespace:** `Illuminate\Foundation\Http\Attributes\ErrorBag`

## Usage

```php
use Illuminate\Foundation\Http\Attributes\ErrorBag;
use Illuminate\Foundation\Http\FormRequest;

#[ErrorBag('login')]
class LoginRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ];
    }
}
```

In the view you can then access errors via the named bag:

```blade
@if ($errors->login->any())
    <ul>
        @foreach ($errors->login->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
@endif
```

---

[← Back to README](../../README.md)
