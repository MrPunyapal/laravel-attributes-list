# `#[Deprecated]`

**Description:** Marks a function, method, class, or class constant as deprecated. Using deprecated functionality emits an `E_USER_DEPRECATED` notice.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.4

## Usage

```php
#[\Deprecated(message: 'use newMethod() instead', since: '2.0')]
function oldMethod(): void
{
    // ...
}

oldMethod(); // Deprecated: Function oldMethod() is deprecated since 2.0, use newMethod() instead
```

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `$message` | `?string` | Optional explanation of the deprecation and/or replacement |
| `$since` | `?string` | Optional string indicating when the deprecation was introduced |

### On a class

```php
#[\Deprecated(message: 'use NewService instead', since: '3.0')]
class OldService
{
    // ...
}
```

### On a class constant

```php
class Config
{
    #[\Deprecated(message: 'use Config::NEW_LIMIT instead', since: '1.5')]
    const OLD_LIMIT = 100;

    const NEW_LIMIT = 200;
}
```

---

[← Back to README](../../README.md)
