# Edit form

In this chapter we will make the following page:

```
TODO: Screenshot of the page
```

## Create new page

Create a new file `/views/BrandForm.page.ts` with the following content:

```ts
import { BasePage } from 'oksy';
import { Layout } from './Components/Layout';

export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

	view() {
		return [
			Layout(this, () => []),
		];
	}
}
```

## URL & init method

Notice the `:brandId` parameter in the URL, this will be passed to the `init` method. We want to look up the `Brand` model using the `brandId` variable and return a 404 page if no brand could be found:

```ts
import { Brand } from '../models/Brand'; // [!code ++]

export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    private brand: Brand // [!code ++]

    init(brandId: string) { // [!code ++]
        this.brand = this.database.getById('Brand', brandId); // [!code ++]
        if (this.brand === null) return false; // [!code ++]
    } // [!code ++]

	view() { ... }
}
```

If the `init` function returns a `false` then a 404 page will be displayed to the user. You can try to visit `/brand/123`. A brand with the ID `123` does not exist so you should see a 404 page:

```
TODO: add 404 page
```

## Static getUrl helper

Let's also add a static method to this page that returns us the URL of the page.

```ts
import { Workspace } from '../models/Core/Workspace'; // [!code ++]

export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    brand: Brand

    init(brandId: string) { ... }

	view() { ... }

    static getUrl(workspace: Workspace, brand: Brand) { // [!code ++]
        return `/${workspace.id}/brand/${brand.id}`; // [!code ++]
    } // [!code ++]
}
```

The `Workspace` also needs to be passed in because each URL is prefixed with the `workspace.id`.

## Uncomment lines in `BrandIndex`

Now that our `BrandForm` is present we can uncomment the following lines in `BrandIndex`:

```ts
// add the import
import BrandForm from './BrandForm.page';

// uncomment
this.client.navigate(BrandForm.getUrl(this.workspace, brand), 'push'); 
```

## Page title and card

Just like the `BrandIndex` page we add a title and a white container to the page

```ts
export default class BrandForm extends BasePage {

	...

	view() {
        Layout(this, () => [
            this.UI.Text({ // [!code ++]
                label: 'Brands', // [!code ++]
                class: 'text-4xl text-gray-700 font-medium mb-4', // [!code ++]
            }), // [!code ++]
            this.UI.Container({ // [!code ++]
                class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white', // [!code ++]
                items: () => [], // [!code ++]
            }), // [!code ++]
        ]),
    }
}
```

## Add input

In the white container we want to add an input for editing the brand name:

```ts
this.UI.Container({
    class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',
    items: () => [
        this.UI.Container({ // [!code ++]
            class: 'flex flex-col space-y-1', // [!code ++]
            items: () => [ // [!code ++]
                this.UI.Text({ // [!code ++]
                    label: 'Name', // [!code ++]
                    class: 'text-sm font-medium text-gray-900' // [!code ++]
                }), // [!code ++]
                this.UI.Input({ // [!code ++]
                    getter: () => this.brand.name, // [!code ++]
                    setter: value => this.brand.name = value // [!code ++]
                }), // [!code ++]
            ] // [!code ++]
        }), // [!code ++]
    ],
}),
```

You see that the `getter` and the `setter` of the `Input` are bound to `this.brand.name`.

## Add datatable

Now let's make the datatable below the input where we can add different cars of the brand.

```
TODO: add screenshot
```

### Add the label and datatable

```ts
this.UI.Container({
    class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',
    items: () => [
        this.UI.Container({ ... }), // the input container
        this.UI.Container({ // [!code ++]
            class: 'flex flex-col space-y-1', // [!code ++]
            items: () => [ // [!code ++]
                this.UI.Text({ // [!code ++]
                    label: 'Cars', // [!code ++]
                    class: 'text-sm font-medium text-gray-900' // [!code ++]
                }), // [!code ++]
                this.UI.DataTable({ // [!code ++]
                    data: () => this.brand.cars.allWithDraft(), // [!code ++]
                    actions: [], // [!code ++]
                    columns: car => [], // [!code ++]
                }), // [!code ++]
            ] // [!code ++]
        }), // [!code ++]
    ],
}),
```

### Add the model name column

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [],
    columns: car => [
        { // [!code ++]
            name: 'Model', // [!code ++]
            view: () => [ // [!code ++]
                this.UI.Input({ // [!code ++]
                    getter: () => car.model ?? '', // [!code ++]
                    setter: value => car.model = value // [!code ++]
                }) // [!code ++]
            ] // [!code ++]
        }, // [!code ++]
    ],
}),
```

This column is just a simple `Input` that is bound to `car.model`.

### Add action column with delete button

We also want to delete a car from the brand with this button:

```
TODO: show screenshot
```

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [],
    columns: car => [
        { ... }, // the model column
        { // [!code ++]
            name: '', // [!code ++]
            view: ({ refresh }) => [ // [!code ++]
                this.UI.Button({ // [!code ++]
                    type: 'danger', // [!code ++]
                    label: 'Delete', // [!code ++]
                    icon: 'delete', // [!code ++]
                    ghost: true, // [!code ++]
                    onClick: async () => { // [!code ++]
                        const confirm = await this.client.confirm( // [!code ++]
                            'Are you sure?', // [!code ++]
                            'This action can not be reversed!', // [!code ++]
                            'Yes, delete car.' // [!code ++]
                        ); // [!code ++]
                        if (confirm) { // [!code ++]
                            this.database.delete(car); // [!code ++]
                            refresh() // [!code ++]
                        } // [!code ++]
                    } // [!code ++]
                }) // [!code ++]
            ] // [!code ++]
        }, // [!code ++]
    ],
}),
```

### Add a button to create a new row

Let's make a button to create a new row to the car's datatable:

```
screenshot of button
```

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [
        { // [!code ++]
            icon: 'add', // [!code ++]
            label: 'Add', // [!code ++]
            onClick: ({ refresh }) => { // [!code ++]
                const car = this.database.create('Car'); // [!code ++]
                car.brand = this.brand; // [!code ++]
                refresh(); // [!code ++]
            } // [!code ++]
        }, // [!code ++]
    ],
    columns: car => [ ... ],
}),
```