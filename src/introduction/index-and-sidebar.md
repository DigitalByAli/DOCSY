# Index & Sidebar

In this chapter we will make the following page:

<img src="/introduction/1-min.png" class='tw-rounded' />

## Remove boilerplate code

Now that we have a workspace, user and some brands we can create a brand index page.
Delete the `/views/Home.page.ts` and create a `/views/BrandIndex.page.ts` file with the following contents:

```ts
import { BasePage } from 'oksy';
import { Layout } from './Components/Layout';

export default class BrandIndex extends BasePage {

	static URL = '/';

	view() {
		return [
			Layout(this, () => []),
		];
	}
}
```

Open the `/views/Components/Layout.ts` file and rename the sidebar item to:

```ts{2,7}
import { BasePage } from 'oksy';
import BrandIndex from './../BrandIndex.page';

export function Layout(page: BasePage, view: () => any[]) {
	return page.UI.DarkSidebar({
		menu: [
			{ name: 'Brand', href: BrandIndex.URL, icon: 'apartment', highlight: BrandIndex.URL },
		],
		view,
	});
}
```

The `icon` key value should come from the [Google Material Symbol Icon Set](https://fonts.google.com/icons?icon.style=Rounded).

## Adding a title

Open the `/views/BrandIndex.page.ts` and add the following lines:

```ts
import { BasePage } from 'oksy';
import { Layout } from './Components/Layout';

export default class BrandIndex extends BasePage {

	static URL = '/';

	view() {
		return [
			Layout(this, () => [
				this.UI.Text({// [!code hl]
					label: 'Brands',// [!code hl]
					class: 'text-4xl text-gray-700 font-medium mb-4',// [!code hl]
				}),// [!code hl]
			]),
		];
	}
}
```

This will display a title on your page:

<img src="/introduction/2-min.png" class='tw-rounded' />

## Adding the datatable

### Add the datatable

Add the `DataTable` wrapped in a `Container` element under the title.

```ts
Layout(this, () => [
	this.UI.Text({
		label: 'Brands',
		class: 'text-4xl text-gray-700 font-medium mb-4',
	}),
	this.UI.Container({// [!code hl]
		class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',// [!code hl]
		items: () => [// [!code hl]
			this.UI.DataTable({// [!code hl]
				data: () => this.database.getAllWithDraft('Brand'),// [!code hl]
				actions: [],// [!code hl]
				columns: brand => [],// [!code hl]
			}),// [!code hl]
		],// [!code hl]
	}),// [!code hl]
]),
```

### Add the columns

```ts
this.UI.DataTable({
	data: () => this.database.getAllWithDraft('Brand'),
	actions: [],
	columns: brand => [
		{// [!code hl]
			name: 'Name',// [!code hl]
			view: () => [// [!code hl]
				this.UI.Text({ label: () => brand.name ?? '' }),// [!code hl]
			],// [!code hl]
			search: () => brand.name ?? '',// [!code hl]
			sort: () => brand.name,// [!code hl]
		},// [!code hl]
		{// [!code hl]
			name: 'Amount of cars',// [!code hl]
			view: () => [// [!code hl]
				this.UI.Text({ label: () => brand.cars.size().toString() }),// [!code hl]
			],// [!code hl]
			search: () => brand.cars.size().toString() ?? '',// [!code hl]
			sort: () => brand.cars.size(),// [!code hl]
		},// [!code hl]
	],
}),
```

You should see 2 columns that are both **searchable** and **sortable** on your page:

<img src="/introduction/3-min.png" class='tw-rounded' />

### Add a create button

```ts
this.UI.DataTable({
	data: () => this.database.getAllWithDraft('Brand'),
	actions: [
		{// [!code hl]
			icon: 'add',// [!code hl]
			label: 'Add',// [!code hl]
			onClick: () => { },// [!code hl]
		},// [!code hl]
	],
	columns: brand => [...],
}),
```

<img src="/introduction/4-min.png" class='tw-rounded' />

When the user clicks the create button we want to **create a new brand model** and then **navigate the client to the edit form of the newly created brand**. Add the following lines in the `onClick` method.

```ts
const brand = this.database.create('Brand');
// this.client.navigate(BrandForm.getUrl(this.workspace, brand), 'push');
```

::: warning
The second line is commented out because we do not have a `BrandForm` class **yet**, we will create that page in the **next chapter**.
:::

### Add an actions columns

<img src="/introduction/5-min.png" class='tw-rounded' />

Add the following columns with an empty name (`name: ''`) to your columns:

```ts
this.UI.DataTable({
	...,
	columns: brand => [
		...,
		{// [!code hl]
			name: '',// [!code hl]
			view: () => [// [!code hl]
				this.UI.Container({// [!code hl]
					class: 'flex',// [!code hl]
					items: () => []// [!code hl]
				}),// [!code hl]
			],// [!code hl]
		},// [!code hl]
	],
}),
```

Now let's add an edit button to the action column.

```ts
this.UI.Container({
	class: 'flex',
	items: () => [
		this.UI.Button({// [!code hl]
			type: 'tertiary',// [!code hl]
			ghost: true,// [!code hl]
			label: 'Edit',// [!code hl]
			icon: 'edit',// [!code hl]
			onClick: () => {// [!code hl]
				// this.client.navigate(BrandForm.getUrl(this.workspace, brand), 'push');// [!code hl]
			}// [!code hl]
		}),// [!code hl]
	]
})
```

::: warning
Temporarily comment out the `.navigate` line because the page does not exist yet.
:::

You should see the edit button in the action columns

<img src="/introduction/6-min.png" class='tw-rounded' />

Now let's add a delete button to the datatable:

```ts
this.UI.Container({
	class: 'flex',
	items: ({ refresh }) => [// [!code hl]
		this.UI.Button({ ... }), // the edit button
		this.UI.Button({// [!code hl]
			type: 'danger',// [!code hl]
			ghost: true,// [!code hl]
			label: 'Delete',// [!code hl]
			icon: 'delete',// [!code hl]
			onClick: async () => {// [!code hl]
				const confirm = await this.client.confirm(// [!code hl]
					'Are you sure?',// [!code hl]
					'All the cars that belong to this brand will also be deleted. This action can not be reversed!',// [!code hl]
					'Yes, delete brand.'// [!code hl]
				);// [!code hl]
				if (confirm) {// [!code hl]
					this.database.delete(brand);// [!code hl]
					refresh();// [!code hl]
				}// [!code hl]
			}// [!code hl]
		})// [!code hl]
	]
})
```

When the user clicks on the delete button we show a confirm dialog. We delete the brand if the user accepts the confirm.

The `refresh` method manually refreshed the datatable after deletion. This method is imported from `items: ({ refresh }) => [` (a couple of lines above).