# `#[Scoped]`

**Description:** Registers the class as a scoped singleton in the container — shared within a single request/lifecycle, but fresh for each new request.

**Namespace:** `Illuminate\Container\Attributes\Scoped`

## Usage

```php
use Illuminate\Container\Attributes\Scoped;

#[Scoped]
class RequestContext
{
    private array $data = [];

    public function set(string $key, mixed $value): void
    {
        $this->data[$key] = $value;
    }

    public function get(string $key): mixed
    {
        return $this->data[$key] ?? null;
    }
}
```

---

[← Back to README](../../README.md)
