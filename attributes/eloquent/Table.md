# `#[Table]`

**Description:** Defines the database table name, primary key, key type, and incrementing behavior for an Eloquent model. Pass `key: false` to disable the primary key.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Table`

**Added in:** Laravel 13.0

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

// Before:
protected $table = 'posts';
protected $primaryKey = 'post_id';
protected $keyType = 'string';
public $incrementing = false;
```

```php
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

// After:
#[Table('posts', key: 'post_id', keyType: 'string', incrementing: false, timestamps: false, dateFormat: 'Y-m-d H:i:s')]
class Post extends Model
{
    //
}
```

Disable the primary key with `key: false`:

```php
#[Table('some_table', key: false)]
class SomeModel extends Model
{
    // No primary key
}
```

---

[← Back to README](../../README.md)
