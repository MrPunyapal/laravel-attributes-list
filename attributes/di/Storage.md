# `#[Storage]`

**Description:** Injects a specific storage disk instance by name.

**Namespace:** `Illuminate\Container\Attributes\Storage`

## Usage

```php
use Illuminate\Container\Attributes\Storage;
use Illuminate\Contracts\Filesystem\Filesystem;

class AvatarService
{
    public function __construct(
        #[Storage('s3')] private readonly Filesystem $disk
    ) {}

    public function upload(string $path, mixed $contents): void
    {
        $this->disk->put($path, $contents);
    }
}
```

Enum values are also supported:

```php
use App\Enums\StorageDisk;

#[Storage(StorageDisk::S3)] private readonly Filesystem $disk
```

---

[← Back to README](../../README.md)
