<script setup>
import BaseDataTable from '../../../SRC/public/src/Components/Base/DataTable/BaseDataTable.vue';
import { UseDummyPage } from '../../../DESY/src/pages/DataTablesPage/UseDummyPage';

const { page, request } = UseDummyPage();
</script>

# DataTable

The example below is based on the following model:

```ts
export class Customer extends Entity {
    firstName: string
    lastName: string
    email: string

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
```

## Simple DataTable

```ts
this.UI.DataTable({
    data: () => this.database.getAllWithDraft('Customer'),
    selectable: false,
    columns: customer => [
        {
            name: 'Fullname',
            view: () => [
                this.UI.Text({ label: () => customer.fullName() }),
            ],
        },
        {
            name: 'Email',
            view: () => [
                this.UI.Text({ label: () => customer.email }),
            ],
        },
    ]
})
```

<img src="/ui/data-table/datatable1-min.jpg" class='tw-rounded' />

## Search and Sort

```ts{8,9,14,15}
this.UI.DataTable({
    data: () => this.database.getAllWithDraft('Customer'),
    selectable: false,
    columns: customer => [
        {
            name: 'Fullname',
            view: () => [ ... ],
            search: () => customer.fullName(),
            sort: () => customer.fullName(),
        },
        {
            name: 'Email',
            view: () => [ ... ],
            search: () => customer.email,
            sort: () => customer.email,
        },
    ]
})
```

<img src="/ui/data-table/datatable2-min.jpg" class='tw-rounded' />

<img src="/ui/data-table/datatable3-min.jpg" class='tw-rounded' />

## Actions

### Default

```ts{4-13}
this.UI.DataTable({
    data: () => this.database.getAllWithDraft('Customer'),
    selectable: false,
    actions: [
        {
            icon: 'add',
            label: 'Add',
            onClick: ({ refresh }) => {
                this.database.create('Customer');
                refresh();
            },
        }
    ],
    columns: customer => [ ... ]
})
```

<img src="/ui/data-table/datatable4-min.jpg" class='tw-rounded' />

### Bulk

```ts{3,6-17}
this.UI.DataTable({
    data: () => this.database.getAllWithDraft('Customer'),
    selectable: true, // this can be left out or set to true (default: true)
    actions: [
        { ... }, // the add button
        {
            bulkAction: true,
            icon: 'delete',
            label: 'Delete',
            onClick: ({ refresh, selectedIds }) => {
                for(const selectedId of selectedIds) {
                    const customer = this.database.getById('Customer', selectedId);
                    this.database.delete(customer);
                }
                refresh();
            },
        }
    ],
    columns: customer => [ ... ]
})
```

<img src="/ui/data-table/datatable5-min.jpg" class='tw-rounded' />