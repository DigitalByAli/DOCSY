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

Notice the `:brandId` parameter in the URL, this will be passed to the init method:

```ts
export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    init(brandId: string) {// [!code ++]
        // [!code ++]
    } // [!code ++]

	view() { ... }
}
```

We want to lookup the `Brand` model using the `brandId` variable and return a 404 page if no brand could be found:

```ts
export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    brand: Brand // [!code ++]

    init(brandId: string) {
        this.brand = this.database.getById('Brand', brandId); // [!code ++]
        if (this.brand === null) return false; // [!code ++]
    }

	view() { ... }
}
```

If the `init` function returns a `false` then a 404 page will be displayed to the user. You can try to visit `/brand/123`. A brand with the ID `123` does not exist so you should see a 404 page:

```
TODO: add 404 page
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

This piece of code is the label above the input:

```ts
this.UI.Text({
    label: 'Name',
    class: 'text-sm font-medium text-gray-900'
}),
```

This code is the input itself:
```ts
this.UI.Input({
    getter: () => this.brand.name,
    setter: value => this.brand.name = value
}),
```

You see that the `getter` and the `setter` are bound to `this.brand.name`.

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

## Uncomment lines in `BrandIndex`

Now that our `BrandForm` is working we can uncomment the following lines in `BrandIndex`:

```ts
// line 1
this.client.navigate(PhoneForm.getUrl(this.workspace, phone), 'push');

// line 2
this.client.navigate(BrandForm.getUrl(this.workspace, newBrand), 'push');
```