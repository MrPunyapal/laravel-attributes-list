# `#[NoDiscard]`

**Description:** Indicates that the return value of a function or method should not be discarded. Emits a warning if the return value is unused.

**Namespace:** Built-in PHP (no import required)

**Since:** PHP 8.5

## Usage

```php
#[\NoDiscard('as processing might fail for individual items')]
function processItems(array $items): array
{
    // Returns an array of results/errors per item
    return [];
}

processItems($items); // Warning: return value should be used or cast as (void)

$results = processItems($items); // OK
```

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `$message` | `?string` | Optional message explaining why the return value should not be discarded |

### Intentionally discarding the return value

Use a `(void)` cast to suppress the warning explicitly:

```php
(void) processItems($items); // Suppresses the warning — PHP 8.5+
```

For cross-version compatibility (below PHP 8.5), use a `$_` variable:

```php
$_ = processItems($items); // No warning on any PHP version
```

> **Note:** `#[\NoDiscard]` can be added even when targeting PHP 8.4 or below — it simply has no effect on older versions.

---

[← Back to README](../../README.md)
