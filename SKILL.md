---
name: laravel-attributes
description: "Guides writing modern Laravel PHP code using PHP 8+ attributes instead of boilerplate class properties and methods. Use this skill whenever writing or reviewing any Laravel class — Eloquent models, queue jobs, Artisan commands, controllers, form requests, test classes, factories, API resources, or service container bindings. Trigger immediately when you see properties like $fillable, $guarded, $table, $connection, $hidden, $visible, $appends, $touches, $timestamps, $incrementing, $dateFormat, $queue, $tries, $timeout, $delay, $backoff, $maxExceptions, $signature, $redirect, $redirectRoute, $stopOnFirstFailure, $errorBag, or $seeder — or when someone calls $this->middleware() in a controller constructor, or registers bindings via singleton()/scoped()/bind() in a service provider. Also trigger proactively when generating any new Laravel class from scratch."
---

# Laravel PHP Attributes

Laravel ships with PHP 8+ attributes that replace verbose class property configuration with expressive, declarative syntax. Attributes keep classes lean — intent is declared at the top where it's immediately visible, rather than buried in a list of properties. This is not just style: it reduces cognitive overhead when reading unfamiliar code and makes it easier to spot configuration at a glance.

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

### Dependency Injection

```php
// Before — registered in a service provider
$this->app->singleton(PaymentGateway::class, StripeGateway::class);

// After — declared on the class itself
use Illuminate\Container\Attributes\Singleton;

#[Singleton]
class StripeGateway implements PaymentGateway {}
```

## Reference Files

| File | When to use |
|---|---|
| `README.md` | Browse all available attributes by category |
| `attributes/<category>/<Name>.md` | Exact namespace, parameters, and usage example for a specific attribute |
