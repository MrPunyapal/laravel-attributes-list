# Laravel PHP Attributes List (Laravel 13 Ready)

A curated list of **native and upcoming PHP Attributes in Laravel**.
Laravel is moving towards an **attribute-first architecture**, reducing boilerplate and improving readability.

> Covers attributes for Models, Jobs, Requests, Commands, and more.

---

## 🚀 Why Attributes?

Laravel is adopting PHP 8+ Attributes to:

* Replace repetitive method overrides
* Improve readability
* Enable declarative configuration
* Reduce boilerplate

---

## 📦 Model Attributes

### `#[CollectedBy]`

Define a custom collection for a model.

```php
use Illuminate\Database\Eloquent\Attributes\CollectedBy;

#[CollectedBy(PostCollection::class)]
class Post extends Model {}
```

---

### `#[WithoutTimestamps]`

Disable timestamps without overriding `$timestamps`.

```php
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;

#[WithoutTimestamps]
class Post extends Model {}
```

---

### `#[WithoutIncrementing]`

Disable auto-incrementing IDs.

```php
use Illuminate\Database\Eloquent\Attributes\WithoutIncrementing;

#[WithoutIncrementing]
class Post extends Model {}
```

---

## ⚙️ Job Attributes

### `#[WithoutOverlapping]`

Prevent overlapping job execution.

```php
use Illuminate\Queue\Attributes\WithoutOverlapping;

#[WithoutOverlapping]
class ProcessOrder implements ShouldQueue {}
```

---

### `#[RateLimited]`

Apply rate limiting to jobs.

```php
use Illuminate\Queue\Attributes\RateLimited;

#[RateLimited('emails')]
class SendEmail implements ShouldQueue {}
```

---

## 📡 Event / Listener Attributes

### `#[AsListener]`

Register a class as an event listener.

```php
use Illuminate\Events\Attributes\AsListener;

#[AsListener]
class SendNotification {}
```

---

## 📨 Request Attributes

### `#[Validate]`

Inline validation rules inside controller methods.

```php
use Illuminate\Http\Attributes\Validate;

public function store(
    #[Validate('required|string')]
    string $name
) {}
```

---

## 🧠 Command Attributes

### `#[AsCommand]`

Define Artisan command metadata via attribute.

```php
use Illuminate\Console\Attributes\AsCommand;

#[AsCommand(name: 'app:run')]
class RunCommand extends Command {}
```

---

## 🛠️ Middleware Attributes

### `#[Middleware]`

Attach middleware directly.

```php
use Illuminate\Routing\Attributes\Middleware;

#[Middleware('auth')]
class DashboardController {}
```

---

## 🌐 Route Attributes (Future Direction)

```php
use Illuminate\Routing\Attributes\Get;

#[Get('/users')]
public function index() {}
```

---

## 🔐 Authorization Attributes

### `#[Can]`

Authorize directly on methods.

```php
use Illuminate\Auth\Attributes\Can;

#[Can('update', Post::class)]
public function update() {}
```

---

## 🧪 Testing Attributes (Experimental)

### `#[Test]`

Mark test methods.

```php
#[Test]
public function it_works() {}
```

---

## 🧩 Misc Attributes

### `#[Singleton]`

Register singleton services.

```php
use Illuminate\Container\Attributes\Singleton;

#[Singleton]
class PaymentService {}
```

---

## ⚠️ Notes

* Some attributes are **introduced in Laravel 11/12** and expanded in Laravel 13.
* Laravel 13 is expected to push **full attribute-first APIs**.

---

## 🤝 Contributing

PRs are welcome!
Add missing attributes or improvements.

---

## ⭐ Credits

Inspired by the Laravel community and ongoing framework evolution.

---
