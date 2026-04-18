# Laravel PHP Attributes List

A curated list of **PHP Attributes available in Laravel**.

---

## 📊 Eloquent (Models)

* `#[Table]` — Define database table
* `#[Fillable]` — Define mass assignable attributes
* `#[Guarded]` — Define guarded attributes
* `#[Hidden]` — Hide attributes from serialization
* `#[Visible]` — Define visible attributes
* `#[Appends]` — Append accessors to arrays
* `#[Touches]` — Touch related models
* `#[Connection]` — Specify database connection
* `#[Unguarded]` — Disable mass assignment protection
* `#[CollectedBy]` — Custom collection class
* `#[WithoutTimestamps]` — Disable timestamps
* `#[WithoutIncrementing]` — Disable auto-incrementing IDs
* `#[ScopedBy]` — Apply global scope(s) to the model
* `#[ObservedBy]` — Register model observer(s)
* `#[DateFormat]` — Define the date format for model timestamps
* `#[Scope]` — Mark a method as a local query scope
* `#[Boot]` — Mark a trait method as a model boot hook
* `#[Initialize]` — Mark a trait method as a model initialize hook
* `#[UseEloquentBuilder]` — Specify a custom Eloquent builder class
* `#[UseFactory]` — Specify the factory class for the model
* `#[UsePolicy]` — Specify the policy class for the model
* `#[UseResource]` — Specify the API resource for the model
* `#[UseResourceCollection]` — Specify the resource collection for the model

---

## 📦 Queue (Jobs / Listeners / Notifications / Mailables)

* `#[Connection]` — Define queue connection
* `#[Queue]` — Define queue name
* `#[Delay]` — Delay execution
* `#[Backoff]` — Configure retry delay
* `#[Tries]` — Maximum retry attempts
* `#[Timeout]` — Job timeout duration
* `#[UniqueFor]` — Unique job duration
* `#[DeleteWhenMissingModels]` — Delete if models are missing
* `#[FailOnTimeout]` — Mark job as failed on timeout
* `#[MaxExceptions]` — Maximum exception attempts
* `#[WithoutRelations]` — Ignore relations during serialization
* `#[DebounceFor]` — Debounce job execution for a given duration

---

## ⚙️ Console (Artisan Commands)

* `#[Signature]` — Define command signature
* `#[Description]` — Define command description
* `#[Aliases]` — Define command aliases
* `#[Usage]` — Define additional command usage examples
* `#[Help]` — Define command help text
* `#[Hidden]` — Hide command from the Artisan list

---

## 🎛️ Controllers

* `#[Middleware]` — Assign middleware to a controller class or action method
* `#[Authorize]` — Authorize a controller action via the gate

---

## 🧪 Form Requests

* `#[RedirectTo]` — Define redirect path on validation failure
* `#[RedirectToRoute]` — Define redirect route on validation failure
* `#[StopOnFirstFailure]` — Stop validation on first failure
* `#[ErrorBag]` — Define the error bag name
* `#[FailOnUnknownFields]` — Fail if the request contains unknown fields

---

## 🌱 Testing

* `#[Seeder]` — Run a specific seeder class during tests
* `#[Seed]` — Run the database seeder during tests
* `#[SetUp]` — Mark a trait method as a test setup hook
* `#[TearDown]` — Mark a trait method as a test teardown hook
* `#[UnitTest]` — Skip framework boot for individual test methods

---

## 🏭 Factories

* `#[UseModel]` — Define model for factory

---

## 📡 API Resources

* `#[Collects]` — Define resource collection mapping
* `#[PreserveKeys]` — Preserve keys in resource output

---

## 🔌 Dependency Injection

* `#[Auth]` — Inject an auth guard instance
* `#[Authenticated]` — Inject the currently authenticated user
* `#[Bind]` — Contextually bind to a specific implementation
* `#[Cache]` — Inject a cache store instance
* `#[Config]` — Inject a configuration value
* `#[Context]` — Inject a value from the application context
* `#[CurrentUser]` — Inject the currently authenticated user model
* `#[DB]` — Inject a database connection instance
* `#[Database]` — Inject a named database connection
* `#[Give]` — Give a specific binding contextually
* `#[Log]` — Inject a logger with a named channel
* `#[RouteParameter]` — Inject a route parameter value
* `#[Scoped]` — Register a class as a scoped singleton in the container
* `#[Singleton]` — Register a class as a singleton in the container
* `#[Storage]` — Inject a storage disk instance
* `#[Tag]` — Inject all bindings tagged with a given tag

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
