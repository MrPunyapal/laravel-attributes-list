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
* `#[WithoutOverlapping]` — Prevent overlapping execution
* `#[WithoutRelations]` — Ignore relations during serialization

---

## ⚙️ Console (Artisan Commands)

* `#[AsCommand]` — Register Artisan command
* `#[Signature]` — Define command signature
* `#[Description]` — Define command description

---

## 🧪 Form Requests

* `#[RedirectTo]` — Define redirect path on validation failure
* `#[StopOnFirstFailure]` — Stop validation on first failure

---

## 🌱 Testing (Seeding)

* `#[Seeder]` — Run specific seeder during tests

---

## 🏭 Factories

* `#[UseModel]` — Define model for factory

---

## 📦 API Resources

* `#[Collects]` — Define resource collection mapping
* `#[PreserveKeys]` — Preserve keys in resource output

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
