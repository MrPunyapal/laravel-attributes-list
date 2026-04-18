---
name: laravel-attributes
description: "Guides writing Laravel PHP code using PHP 8+ attributes instead of boilerplate class properties. Use whenever writing or reviewing Laravel classes — models, jobs, commands, controllers, form requests, tests, factories, API resources, or container bindings. Trigger on properties like $fillable, $guarded, $table, $queue, $tries, $timeout, $signature, $redirect, $errorBag, $seeder, or constructor middleware/singleton registration. Also trigger when generating any new Laravel class from scratch."
---

# Laravel PHP Attributes

> **Requires Laravel 13+.** PHP attribute support was introduced progressively; some attributes may not be available in earlier versions.

Laravel ships with PHP 8+ attributes that replace verbose class property configuration with expressive, declarative syntax. Attributes keep classes lean — intent is declared at the top where it's immediately visible, rather than buried in a list of properties. This is not just style: it reduces cognitive overhead when reading unfamiliar code and makes it easier to spot configuration at a glance.

## When to Use

Apply this skill whenever you encounter any of the following in a Laravel class:

- Eloquent model properties: `$table`, `$fillable`, `$guarded`, `$hidden`, `$visible`, `$appends`, `$touches`, `$connection`, `$dateFormat`, `$incrementing`, `$timestamps`
- Queue properties: `$connection`, `$queue`, `$delay`, `$backoff`, `$tries`, `$timeout`, `$uniqueFor`, `$maxExceptions`
- Console properties: `$signature`, `$description`, `$help`, `$hidden`, `$aliases`
- Controller constructor calling `$this->middleware()`
- Form request properties: `$redirect`, `$redirectRoute`, `$stopOnFirstFailure`, `$errorBag`
- Test setup calling `$this->seed()` or using trait method naming conventions for `setUp`/`tearDown`
- Service provider registering `singleton()`, `scoped()`, or `bind()` for a class that could own that configuration itself
- Any new Laravel class being generated from scratch

## How to Apply Attributes

When encountering boilerplate properties or generating a new class:

1. Identify every property or method that is purely configuration (not business logic).
2. Check `README.md` — it lists every available attribute, organised by category, with a link to each one. Find a matching attribute there first.
3. Open the attribute's file (e.g. `attributes/eloquent/Fillable.md`) to confirm the exact namespace and parameter signature before writing the code.
4. Place the attribute above the class declaration, add the correct `use` import, and remove the property.
5. Group related `use` imports using PHP's grouped import syntax where it reads cleanly.

The namespace in the `use` statement is not optional — PHP attributes silently do nothing without it.

Only fall back to property/method-based configuration when `README.md` has no matching attribute.

## Transformation Examples

### Eloquent Model

```php
// Before
class User extends Model
{
    protected $table = 'users';
    protected $fillable = ['name', 'email'];
    protected $hidden = ['password'];
    protected $connection = 'mysql';
}

// After
use Illuminate\Database\Eloquent\Attributes\{Table, Fillable, Hidden, Connection};

#[Table('users')]
#[Fillable('name', 'email')]
#[Hidden('password')]
#[Connection('mysql')]
class User extends Model {}
```

### Queue Job

```php
// Before
class ProcessOrder implements ShouldQueue
{
    public $connection = 'redis';
    public $queue = 'orders';
    public $tries = 3;
    public $timeout = 60;
    public $backoff = 30;
}

// After
use Illuminate\Queue\Attributes\{Connection, Queue, Tries, Timeout, Backoff};

#[Connection('redis')]
#[Queue('orders')]
#[Tries(3)]
#[Timeout(60)]
#[Backoff(30)]
class ProcessOrder implements ShouldQueue {}
```

### Artisan Command

```php
// Before
class SyncUsers extends Command
{
    protected $signature = 'users:sync {--force}';
    protected $description = 'Sync users from the external API';
}

// After
use Illuminate\Console\Attributes\{Signature, Description};

#[Signature('users:sync {--force}')]
#[Description('Sync users from the external API')]
class SyncUsers extends Command {}
```

### Form Request

```php
// Before
class UpdateProfileRequest extends FormRequest
{
    protected $redirect = '/profile';
    protected $redirectRoute = 'profile.edit';
    protected $stopOnFirstFailure = true;
    protected $errorBag = 'updateProfile';
}

// After
use Illuminate\Foundation\Http\Attributes\{RedirectTo, RedirectToRoute, StopOnFirstFailure, ErrorBag};

#[RedirectTo('/profile')]
#[RedirectToRoute('profile.edit')]
#[StopOnFirstFailure]
#[ErrorBag('updateProfile')]
class UpdateProfileRequest extends FormRequest {}
```

### Dependency Injection

```php
// Before — registered in a service provider
$this->app->singleton(PaymentGateway::class, StripeGateway::class);

// After — declared on the class itself
use Illuminate\Container\Attributes\Singleton;

#[Singleton]
class StripeGateway implements PaymentGateway {}
```

> **Note:** Attribute-based container bindings (`#[Singleton]`, `#[Scoped]`, `#[Bind]`, etc.) only take effect when the class is resolved through Laravel's service container. They do not auto-register — the class must still be type-hinted somewhere that the container resolves (a constructor, route model binding, etc.).

## Reference Files

| File | When to use |
|---|---|
| [README.md](https://github.com/MrPunyapal/laravel-attributes-list/blob/main/README.md) | Browse all available attributes by category |
| [attributes/](https://github.com/MrPunyapal/laravel-attributes-list/tree/main/attributes) | Exact namespace, parameters, and usage example for a specific attribute |
