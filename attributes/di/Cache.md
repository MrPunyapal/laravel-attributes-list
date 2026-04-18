# `#[Cache]`

**Description:** Injects a specific cache store instance by name.

**Namespace:** `Illuminate\Container\Attributes\Cache`

## Usage

```php
use Illuminate\Container\Attributes\Cache;
use Illuminate\Contracts\Cache\Repository;

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
