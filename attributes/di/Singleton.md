# `#[Singleton]`

**Description:** Registers the class as a singleton in the container — shared across the entire application lifecycle.

**Namespace:** `Illuminate\Container\Attributes\Singleton`

**Added in:** Laravel 12.21

## Usage

```php
use Illuminate\Container\Attributes\Singleton;

// Before (service provider):
// $this->app->singleton(ConfigCache::class);
```

```php
use Illuminate\Container\Attributes\Singleton;

// After:
#[Singleton]
class ConfigCache
{
    private array $cache = [];

    public function remember(string $key, callable $callback): mixed
    {
        return $this->cache[$key] ??= $callback();
    }
}
```

---

[← Back to README](../../README.md)
