# `#[Singleton]`

**Description:** Registers the class as a singleton in the container — shared across the entire application lifecycle.

**Namespace:** `Illuminate\Container\Attributes\Singleton`

## Usage

```php
use Illuminate\Container\Attributes\Singleton;

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
