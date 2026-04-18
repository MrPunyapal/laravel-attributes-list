# `#[TearDown]`

**Description:** Marks a trait method as a test tear-down hook. The method is automatically called after each test when the trait is used.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\TearDown`

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\TearDown;

trait CleansUpFiles
{
    #[TearDown]
    public function cleanUpFiles(): void
    {
        Storage::disk('local')->deleteDirectory('test-uploads');
    }
}

class FileUploadTest extends TestCase
{
    use CleansUpFiles;

    public function test_file_can_be_uploaded(): void
    {
        // ...
    }
}
```

---

[← Back to README](../../README.md)
