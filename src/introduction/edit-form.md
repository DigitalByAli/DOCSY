# Edit form

In this chapter we will make the following page:

<img src="/introduction/7-min.png" class='tw-rounded' />

## Create new page

Create a new file `/views/BrandForm.page.ts` with the following content:

```ts
import { BasePage, Draft } from 'oksy';
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
import { Brand } from '../models/Brand';// [!code hl]

export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    private brand: Draft<Brand>// [!code hl]

    init(brandId: string) {// [!code hl]
        const brand = this.database.getById('Brand', brandId);// [!code hl]
        if (brand === null) return false;// [!code hl]
        this.brand = brand;// [!code hl]
    }// [!code hl]

	view() { ... }
}
```

If the `init` function returns a `false` then a 404 page will be displayed to the user. You can try to visit `/brand/123`. A brand with the ID `123` does not exist so you should see a 404 page:

<img src="/introduction/8-min.png" class='tw-rounded' />

## Static getUrl helper

Let's also add a static method to this page that returns us the URL of the page.

```ts
import { Workspace } from '../models/Core/Workspace';// [!code hl]

export default class BrandForm extends BasePage {

	static URL = '/brand/:brandId';

    brand: Draft<Brand>

    init(brandId: string) { ... }

	view() { ... }

    static getUrl(workspace: Workspace, brand: Draft<Brand>) {// [!code hl]
        return `/${workspace.id}/brand/${brand.id}`;// [!code hl]
    }// [!code hl]
}
```

The `Workspace` also needs to be passed in because each URL is prefixed with the `workspace.id`.

## Uncomment lines in `BrandIndex`

Now that our `BrandForm` is present we can uncomment the navigate lines and add the `BrandForm` import in `BrandIndex`:

```ts
// add import
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
            this.UI.Text({// [!code hl]
                label: 'Edit Brand',// [!code hl]
                class: 'text-4xl text-gray-700 font-medium mb-4',// [!code hl]
            }),// [!code hl]
            this.UI.Container({// [!code hl]
                class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',// [!code hl]
                items: () => [],// [!code hl]
            }),// [!code hl]
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
        this.UI.Container({// [!code hl]
            class: 'flex flex-col space-y-1',// [!code hl]
            items: () => [// [!code hl]
                this.UI.Text({// [!code hl]
                    label: 'Name',// [!code hl]
                    class: 'text-sm font-medium text-gray-900'// [!code hl]
                }),// [!code hl]
                this.UI.Input({// [!code hl]
                    getter: () => this.brand.name ?? '',// [!code hl]
                    setter: value => this.brand.name = value// [!code hl]
                }),// [!code hl]
            ]// [!code hl]
        }),// [!code hl]
    ],
}),
```

You see that the `getter` and the `setter` of the `Input` are bound to `this.brand.name`.

<img src="/introduction/9-min.png" class='tw-rounded' />

## Add datatable

Now let's make the datatable below the input where we can add different cars of the brand.

<img src="/introduction/10-min.png" class='tw-rounded' />

### Add the label and datatable

```ts
this.UI.Container({
    class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',
    items: () => [
        this.UI.Container({ ... }), // the input container
        this.UI.Container({// [!code hl]
            class: 'flex flex-col space-y-1',// [!code hl]
            items: () => [// [!code hl]
                this.UI.Text({// [!code hl]
                    label: 'Cars',// [!code hl]
                    class: 'text-sm font-medium text-gray-900'// [!code hl]
                }),// [!code hl]
                this.UI.DataTable({// [!code hl]
                    data: () => this.brand.cars.allWithDraft(),// [!code hl]
                    actions: [],// [!code hl]
                    columns: car => [],// [!code hl]
                }),// [!code hl]
            ]// [!code hl]
        }),// [!code hl]
    ],
}),
```

### Add the model name column

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [],
    columns: car => [
        {// [!code hl]
            name: 'Model',// [!code hl]
            view: () => [// [!code hl]
                this.UI.Input({// [!code hl]
                    getter: () => car.model ?? '',// [!code hl]
                    setter: value => car.model = value// [!code hl]
                })// [!code hl]
            ]// [!code hl]
        },// [!code hl]
    ],
}),
```

This column is just a simple `Input` that is bound to `car.model`.

### Add action column with delete button


We also want to delete a car from the brand with this button:

<img src="/introduction/11-min.png" class='tw-rounded' />

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [],
    columns: car => [
        { ... }, // the model column
        {// [!code hl]
            name: '',// [!code hl]
            view: ({ refresh }) => [// [!code hl]
                this.UI.Button({// [!code hl]
                    type: 'danger',// [!code hl]
                    label: 'Delete',// [!code hl]
                    icon: 'delete',// [!code hl]
                    ghost: true,// [!code hl]
                    onClick: async () => {// [!code hl]
                        const confirm = await this.client.confirm(// [!code hl]
                            'Are you sure?',// [!code hl]
                            'This action can not be reversed!',// [!code hl]
                            'Yes, delete car.'// [!code hl]
                        );// [!code hl]
                        if (confirm) {// [!code hl]
                            this.database.delete(car);// [!code hl]
                            refresh()// [!code hl]
                        }// [!code hl]
                    }// [!code hl]
                })// [!code hl]
            ]// [!code hl]
        },// [!code hl]
    ],
}),
```

### Add a button to create a new row

Let's make a button to create a new row to the car's datatable:

<img src="/introduction/12-min.png" class='tw-rounded' />

```ts
this.UI.DataTable({
    data: () => this.brand.cars.allWithDraft(),
    actions: [
        {// [!code hl]
            icon: 'add',// [!code hl]
            label: 'Add',// [!code hl]
            onClick: ({ refresh }) => {// [!code hl]
                const car = this.database.create('Car');// [!code hl]
                car.brand = this.brand;// [!code hl]
                refresh();// [!code hl]
            }// [!code hl]
        },// [!code hl]
    ],
    columns: car => [ ... ],
}),
```