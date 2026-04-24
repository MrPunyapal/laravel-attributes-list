# `#[SensitiveParameter]`

**Description:** Marks a function or method parameter as sensitive so its value is redacted (replaced with a `SensitiveParameterValue` object) in stack traces and error output.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.2

## Usage

```php
function authenticate(
    string $username,
    #[\SensitiveParameter] string $password,
): bool {
    // If an exception is thrown here, $password will NOT appear in the stack trace
    throw new RuntimeException('Auth failed');
}
```

Without `#[\SensitiveParameter]`, the password would be visible in error logs:

```
// Without attribute:
#0 file.php(10): authenticate('alice', 'hunter2')

// With attribute:
#0 file.php(10): authenticate('alice', Object(SensitiveParameterValue))
```

> **Warning:** The attribute must be applied at the concrete implementation, not just on an interface method. Applying it only to an interface declaration does not protect the implementing class.

---

[← Back to README](../../README.md)
