# `#[Cache]`

**Description:** Injects a specific cache store instance by name.

**Namespace:** `Illuminate\Container\Attributes\Cache`

**Added in:** Laravel 11.0

## Usage

```php
use Illuminate\Support\Facades\Cache;
use Illuminate\Contracts\Cache\Repository;

// Before (service provider):
// $this->app->when(ProductService::class)
//     ->needs(Repository::class)
//     ->give(fn () => Cache::store('redis'));
```

```php
use Illuminate\Container\Attributes\Cache;
use Illuminate\Contracts\Cache\Repository;

// After:
class ProductService
{
    public function __construct(
        #[Cache('redis')] private readonly Repository $cache
    ) {}

    public function find(int $id): mixed
    {
        return $this->cache->remember("product:{$id}", 3600, fn () => Product::find($id));
    }
}
```

---

[← Back to README](../../README.md)
