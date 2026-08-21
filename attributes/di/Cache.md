# `#[Cache]`

**Description:** Injects a specific cache store instance by name. Pass `memo: true` to inject a memoized store that keeps values in memory for the current request or process.

**Namespace:** `Illuminate\Container\Attributes\Cache`

**Added in:** Laravel 11.20 (memoization since Laravel 13.x)

## Usage

```php
use Illuminate\Support\Facades\Cache;
use Illuminate\Contracts\Cache\Repository;

// Before (service provider):
$this->app->when(ProductService::class)
    ->needs(Repository::class)
    ->give(fn () => Cache::store('redis'));
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

Inject a memoized store so repeated reads within the same request hit memory:

```php
use Illuminate\Container\Attributes\Cache;
use Illuminate\Contracts\Cache\Repository;

class ProductService
{
    public function __construct(
        #[Cache('redis', memo: true)] private readonly Repository $cache
    ) {}
}
```

---

[← Back to README](../../README.md)
