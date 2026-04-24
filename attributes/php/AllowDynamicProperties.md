# `#[AllowDynamicProperties]`

**Description:** Marks a class to allow dynamic (undeclared) properties without emitting a deprecation notice.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.2

## Usage

Dynamic properties are deprecated as of PHP 8.2. Without this attribute, assigning to an undeclared property emits a deprecation notice.

```php
#[\AllowDynamicProperties]
class UserSession
{
    public string $id;
}

$session = new UserSession();
$session->id = 'abc123';
$session->extraData = 'some value'; // No deprecation notice
```

> **Note:** The effect is inherited. Child classes of a class marked with this attribute will also allow dynamic properties, even without explicitly declaring it.

```php
#[\AllowDynamicProperties]
class Base {}

class Child extends Base {}

$child = new Child();
$child->dynamic = true; // Also allowed
```

---

[← Back to README](../../README.md)
