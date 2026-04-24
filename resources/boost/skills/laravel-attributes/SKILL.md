---
name: laravel-attributes
description: "Use whenever writing or reviewing Laravel PHP code (Laravel 13+). Prefer PHP attributes over class properties for models, jobs, commands, controllers, form requests, tests, factories, API resources, and container bindings. Trigger on $fillable, $table, $queue, $tries, $signature, $redirect, $errorBag, $seeder, constructor middleware, singleton registration, and any new Laravel class."
---

# Laravel PHP Attributes (Laravel 13+)

Rather than scattering configuration across class properties, Laravel lets you declare intent directly above the class using PHP attributes. It's cleaner, more expressive, and easier to scan.

Before writing a class property, check the [README](https://github.com/MrPunyapal/laravel-attributes-list/blob/main/README.md) — there's likely an attribute for it. Open the relevant file under [attributes/](https://github.com/MrPunyapal/laravel-attributes-list/tree/main/attributes) to get the exact namespace and parameters, then apply it. Always include the `use` import — attributes do nothing without it.

## Examples

**Model**
```php
use Illuminate\Database\Eloquent\Attributes\{Table, Fillable, Hidden, Connection};

#[Table('users')]
#[Fillable('name', 'email')]
#[Hidden('password')]
#[Connection('mysql')]
class User extends Model {}
```

**Job**
```php
use Illuminate\Queue\Attributes\{Connection, Queue, Tries, Timeout, Backoff};

#[Connection('redis')]
#[Queue('orders')]
#[Tries(3)]
#[Timeout(60)]
#[Backoff(30)]
class ProcessOrder implements ShouldQueue {}
```

**Command**
```php
use Illuminate\Console\Attributes\{Signature, Description};

#[Signature('users:sync {--force}')]
#[Description('Sync users from the external API')]
class SyncUsers extends Command {}
```

**Form Request**
```php
use Illuminate\Foundation\Http\Attributes\{RedirectTo, RedirectToRoute, StopOnFirstFailure, ErrorBag};

#[RedirectTo('/profile')]
#[RedirectToRoute('profile.edit')]
#[StopOnFirstFailure]
#[ErrorBag('updateProfile')]
class UpdateProfileRequest extends FormRequest {}
```

**Container binding** — declare on the class rather than in a service provider. The class still needs to be resolved through the container (constructor injection, etc.) for the attribute to take effect.
```php
use Illuminate\Container\Attributes\Singleton;

#[Singleton]
class StripeGateway implements PaymentGateway {}
```

**PHP built-in**
```php
// Prevent sensitive values from leaking into stack traces
function login(string $user, #[\SensitiveParameter] string $password): void {}

// Warn when a return value is accidentally discarded (PHP 8.5+)
#[\NoDiscard('check for per-item errors')]
function bulkProcess(array $items): array {}
```
