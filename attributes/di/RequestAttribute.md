# `#[RequestAttribute]`

**Description:** Injects a value from the current request's attributes collection into a controller method or service constructor.

**Namespace:** `Illuminate\Container\Attributes\RequestAttribute`

**Added in:** Laravel 13.21

## Usage

```php
use Illuminate\Container\Attributes\RequestAttribute;
use Illuminate\Http\Request;
use App\Models\Tenant;

// Before:
// $tenant = $request->attributes->get('tenant');
```

```php
use Illuminate\Container\Attributes\RequestAttribute;
use Illuminate\Http\Request;
use App\Models\Tenant;

// After:
class TenantController
{
    public function __invoke(
        Request $request,
        #[RequestAttribute('tenant')] Tenant $tenant
    ) {
        //
    }
}
```

---

[← Back to README](../../README.md)
