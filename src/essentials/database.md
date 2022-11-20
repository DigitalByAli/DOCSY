# Database

The database class is only available through page classes (*through `this.database`*) and is responsible for creating and deleting models.

## Accessing the database object

```ts{8}
import { BasePage } from 'oksy';

export default class ExamplePage extends BasePage {
    
    static URL = '/';

    view() {
        const customer = this.database.create('Customer')
    }
}
```

## Creating a model

```ts
const customer = this.database.create('Customer');
customer.name = 'Kevin' // automaticly synced in the UI and database
```

## Retrieving models

```ts
this.database.getById('Customer', '1');     // get customer with id 1
this.database.getAll('Customer');           // get all valid customers
this.database.getAllWithDraft('Customer');  // get all customers
this.database.delete(customerPeter);        // delete customerPeter
```

## Sorting

The `sort` helper takes care of sorting an array of `Entity` objects. Because, this can be a bit cumbersome to handle `number`, `string`, `boolean` and `Dayjs` properties.

### Example - DataTable newest first

We want to sort the [DataTable](/ui/data-table) with the newest record first. We can do that with the following code:

```ts{1,4}
import { sort } from 'oksy';

this.UI.DataTable({
    data: () => sort(this.database.getAllWithDraft('Customer'), 'createdAt', 'DESC'),
})
```