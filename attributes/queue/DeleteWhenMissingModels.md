# `#[DeleteWhenMissingModels]`

**Description:** Automatically deletes the job if any of its injected Eloquent models are missing (soft-deleted or not found).

**Namespace:** `Illuminate\Queue\Attributes\DeleteWhenMissingModels`

## Usage

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\DeleteWhenMissingModels;
use App\Models\Podcast;

#[DeleteWhenMissingModels]
class ProcessPodcast implements ShouldQueue
{
    public function __construct(
        public readonly Podcast $podcast
    ) {}

    public function handle(): void
    {
        // Job is silently deleted if $podcast no longer exists
    }
}
```

---

[← Back to README](../../README.md)
