# Laravel PHP Attributes List

A curated list of **PHP Attributes available in Laravel Framework**.

---

## Install the skill

- Boost (recommended):

```bash
php artisan boost:add-skill MrPunyapal/laravel-attributes-list --skill laravel-attributes
```
- NPX

```bash
npx skills add MrPunyapal/laravel-attributes-list
```

---

## 📊 Eloquent (Models)

* [`#[Table]`](attributes/eloquent/Table.md) — Define database table
* [`#[Fillable]`](attributes/eloquent/Fillable.md) — Define mass assignable attributes
* [`#[Guarded]`](attributes/eloquent/Guarded.md) — Define guarded attributes
* [`#[Hidden]`](attributes/eloquent/Hidden.md) — Hide attributes from serialization
* [`#[Visible]`](attributes/eloquent/Visible.md) — Define visible attributes
* [`#[Appends]`](attributes/eloquent/Appends.md) — Append accessors to arrays
* [`#[Touches]`](attributes/eloquent/Touches.md) — Touch related models
* [`#[Connection]`](attributes/eloquent/Connection.md) — Specify database connection
* [`#[Unguarded]`](attributes/eloquent/Unguarded.md) — Disable mass assignment protection
* [`#[CollectedBy]`](attributes/eloquent/CollectedBy.md) — Custom collection class
* [`#[WithoutTimestamps]`](attributes/eloquent/WithoutTimestamps.md) — Disable timestamps
* [`#[WithoutIncrementing]`](attributes/eloquent/WithoutIncrementing.md) — Disable auto-incrementing IDs
* [`#[ScopedBy]`](attributes/eloquent/ScopedBy.md) — Apply global scope(s) to the model
* [`#[ObservedBy]`](attributes/eloquent/ObservedBy.md) — Register model observer(s)
* [`#[DateFormat]`](attributes/eloquent/DateFormat.md) — Define the date format for model timestamps
* [`#[Scope]`](attributes/eloquent/Scope.md) — Mark a method as a local query scope
* [`#[Boot]`](attributes/eloquent/Boot.md) — Mark a trait method as a model boot hook
* [`#[Initialize]`](attributes/eloquent/Initialize.md) — Mark a trait method as a model initialize hook
* [`#[UseEloquentBuilder]`](attributes/eloquent/UseEloquentBuilder.md) — Specify a custom Eloquent builder class
* [`#[UseFactory]`](attributes/eloquent/UseFactory.md) — Specify the factory class for the model
* [`#[UsePolicy]`](attributes/eloquent/UsePolicy.md) — Specify the policy class for the model
* [`#[UseResource]`](attributes/eloquent/UseResource.md) — Specify the API resource for the model
* [`#[UseResourceCollection]`](attributes/eloquent/UseResourceCollection.md) — Specify the resource collection for the model

---

## 📦 Queue (Jobs / Listeners / Notifications / Mailables)

* [`#[Connection]`](attributes/queue/Connection.md) — Define queue connection
* [`#[Queue]`](attributes/queue/Queue.md) — Define queue name
* [`#[Delay]`](attributes/queue/Delay.md) — Delay execution
* [`#[Backoff]`](attributes/queue/Backoff.md) — Configure retry delay
* [`#[Tries]`](attributes/queue/Tries.md) — Maximum retry attempts
* [`#[Timeout]`](attributes/queue/Timeout.md) — Job timeout duration
* [`#[UniqueFor]`](attributes/queue/UniqueFor.md) — Unique job duration
* [`#[DeleteWhenMissingModels]`](attributes/queue/DeleteWhenMissingModels.md) — Delete if models are missing
* [`#[FailOnTimeout]`](attributes/queue/FailOnTimeout.md) — Mark job as failed on timeout
* [`#[MaxExceptions]`](attributes/queue/MaxExceptions.md) — Maximum exception attempts
* [`#[WithoutRelations]`](attributes/queue/WithoutRelations.md) — Ignore relations during serialization
* [`#[DebounceFor]`](attributes/queue/DebounceFor.md) — Debounce job execution for a given duration

---

## ⚙️ Console (Artisan Commands)

* [`#[Signature]`](attributes/console/Signature.md) — Define command signature
* [`#[Description]`](attributes/console/Description.md) — Define command description
* [`#[Aliases]`](attributes/console/Aliases.md) — Define command aliases
* [`#[Usage]`](attributes/console/Usage.md) — Define additional command usage examples
* [`#[Help]`](attributes/console/Help.md) — Define command help text
* [`#[Hidden]`](attributes/console/Hidden.md) — Hide command from the Artisan list

---

## 🎛️ Controllers

* [`#[Middleware]`](attributes/controllers/Middleware.md) — Assign middleware to a controller class or action method
* [`#[Authorize]`](attributes/controllers/Authorize.md) — Authorize a controller action via the gate

---

## 🧪 Form Requests

* [`#[RedirectTo]`](attributes/form-requests/RedirectTo.md) — Define redirect path on validation failure
* [`#[RedirectToRoute]`](attributes/form-requests/RedirectToRoute.md) — Define redirect route on validation failure
* [`#[StopOnFirstFailure]`](attributes/form-requests/StopOnFirstFailure.md) — Stop validation on first failure
* [`#[ErrorBag]`](attributes/form-requests/ErrorBag.md) — Define the error bag name
* [`#[FailOnUnknownFields]`](attributes/form-requests/FailOnUnknownFields.md) — Fail if the request contains unknown fields

---

## 🌱 Testing

* [`#[Seeder]`](attributes/testing/Seeder.md) — Run a specific seeder class during tests
* [`#[Seed]`](attributes/testing/Seed.md) — Run the database seeder during tests
* [`#[SetUp]`](attributes/testing/SetUp.md) — Mark a trait method as a test setup hook
* [`#[TearDown]`](attributes/testing/TearDown.md) — Mark a trait method as a test teardown hook
* [`#[UnitTest]`](attributes/testing/UnitTest.md) — Skip framework boot for individual test methods

---

## 🏭 Factories

* [`#[UseModel]`](attributes/factories/UseModel.md) — Define model for factory

---

## 📡 API Resources

* [`#[Collects]`](attributes/api-resources/Collects.md) — Define resource collection mapping
* [`#[PreserveKeys]`](attributes/api-resources/PreserveKeys.md) — Preserve keys in resource output

---

## 🔌 Dependency Injection

* [`#[Auth]`](attributes/di/Auth.md) — Inject an auth guard instance
* [`#[Authenticated]`](attributes/di/Authenticated.md) — Inject the currently authenticated user
* [`#[Bind]`](attributes/di/Bind.md) — Contextually bind to a specific implementation
* [`#[Cache]`](attributes/di/Cache.md) — Inject a cache store instance
* [`#[Config]`](attributes/di/Config.md) — Inject a configuration value
* [`#[Context]`](attributes/di/Context.md) — Inject a value from the application context
* [`#[CurrentUser]`](attributes/di/CurrentUser.md) — Inject the currently authenticated user model
* [`#[DB]`](attributes/di/DB.md) — Inject a database connection instance
* [`#[Database]`](attributes/di/Database.md) — Inject a named database connection
* [`#[Give]`](attributes/di/Give.md) — Give a specific binding contextually
* [`#[Log]`](attributes/di/Log.md) — Inject a logger with a named channel
* [`#[RouteParameter]`](attributes/di/RouteParameter.md) — Inject a route parameter value
* [`#[Scoped]`](attributes/di/Scoped.md) — Register a class as a scoped singleton in the container
* [`#[Singleton]`](attributes/di/Singleton.md) — Register a class as a singleton in the container
* [`#[Storage]`](attributes/di/Storage.md) — Inject a storage disk instance
* [`#[Tag]`](attributes/di/Tag.md) — Inject all bindings tagged with a given tag

---

## 🧠 Notes

* Attributes provide an alternative to traditional class properties
* They are used across multiple parts of the framework
* Existing approaches (properties, methods) continue to work

---

## 🤝 Contributing

Contributions are welcome.

---

## 👤 Author

**Punyapal Shah**

---
