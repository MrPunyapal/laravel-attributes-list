# `#[Table]`

**Description:** Defines the database table name, primary key, key type, and incrementing behavior for an Eloquent model.

**Namespace:** `Illuminate\Database\Eloquent\Attributes\Table`

## Usage

```php
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table('posts', key: 'post_id', keyType: 'string', incrementing: false, timestamps: false, dateFormat: 'Y-m-d H:i:s')]
class Post extends Model
{
}
```

---

[← Back to README](../../README.md)
