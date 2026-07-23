# `#[RequestAttribute]`

**Description:** Injects a value from the current request's attributes collection into a controller method or service constructor.

**Namespace:** `Illuminate\Container\Attributes\RequestAttribute`

## Usage

```php
use Illuminate\Container\Attributes\RequestAttribute;
use Illuminate\Http\Request;
use App\Models\Tenant;

// Before — manual extraction from the request's attributes collection:
// $tenant = $request->attributes->get('tenant');

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
