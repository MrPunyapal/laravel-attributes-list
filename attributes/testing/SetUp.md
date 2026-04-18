# `#[SetUp]`

**Description:** Marks a trait method as a test set-up hook. The method is automatically called before each test when the trait is used.

**Namespace:** `Illuminate\Foundation\Testing\Attributes\SetUp`

## Usage

```php
use Illuminate\Foundation\Testing\Attributes\SetUp;

trait CreatesUser
{
    #[SetUp]
    public function createUser(): void
    {
        $this->user = User::factory()->create();
    }
}

class UserTest extends TestCase
{
    use CreatesUser;

    public function test_user_can_view_profile(): void
    {
        $this->actingAs($this->user)
             ->get('/profile')
             ->assertOk();
    }
}
```

---

[← Back to README](../../README.md)
