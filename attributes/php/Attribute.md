# `#[Attribute]`

**Description:** Marks a class as a custom reusable attribute that can be applied to other declarations.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.0

## Usage

```php
#[Attribute]
class MyCustomAttribute
{
    public function __construct(public string $value) {}
}

#[MyCustomAttribute('example')]
class SomeClass {}
```

You can restrict where the attribute is allowed to be used:

```php
use Attribute;

#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class OnlyForClassesAndMethods
{
    public function __construct(public string $label) {}
}
```

### Target Constants

| Constant | Description |
|---|---|
| `Attribute::TARGET_CLASS` | Can be applied to classes |
| `Attribute::TARGET_FUNCTION` | Can be applied to functions |
| `Attribute::TARGET_METHOD` | Can be applied to methods |
| `Attribute::TARGET_PROPERTY` | Can be applied to properties |
| `Attribute::TARGET_CLASS_CONSTANT` | Can be applied to class constants |
| `Attribute::TARGET_PARAMETER` | Can be applied to parameters |
| `Attribute::TARGET_ALL` | Can be applied to all declarations (default) |
| `Attribute::IS_REPEATABLE` | The attribute may be applied more than once to the same declaration |

---

[← Back to README](../../README.md)
