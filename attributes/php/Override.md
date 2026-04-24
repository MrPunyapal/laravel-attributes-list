# `#[Override]`

**Description:** Indicates that a method or property is intended to override a declaration in a parent class or interface. A compile-time error is emitted if no matching parent declaration exists.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.3 (methods), PHP 8.5 (properties)

## Usage

```php
class Base
{
    protected function handle(): void {}
}

class Child extends Base
{
    #[\Override]
    protected function handle(): void
    {
        // Guaranteed to override Base::handle()
    }
}
```

If the parent method doesn't exist, PHP emits a fatal error:

```php
class Child extends Base
{
    #[\Override]
    protected function typoInName(): void {} // Fatal error: no matching parent method
}
```

### With properties (PHP 8.5+)

```php
class Base
{
    protected string $name;
}

class Child extends Base
{
    #[\Override]
    protected string $name = 'default';
}
```

> **Note:** Cannot be used on `__construct()`.

---

[← Back to README](../../README.md)
