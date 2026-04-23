# `#[ReturnTypeWillChange]`

**Description:** Silences the deprecation notice emitted when overriding an internal PHP method without declaring a compatible return type, for cross-version PHP compatibility.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.1

## Usage

Use this when overriding a PHP internal method but you cannot yet declare the return type due to cross-version compatibility constraints.

```php
class CustomCollection implements Countable
{
    #[\ReturnTypeWillChange]
    public function count()
    {
        // Can't declare ': int' here due to PHP version constraints
        return 0;
    }
}
```

> **Note:** This attribute is primarily a migration tool. Once you can target PHP 8.1+ exclusively, add the proper return type declaration and remove this attribute.

---

[← Back to README](../../README.md)
