# Index & Sidebar

In this chapter we will make the following page:

```
TODO: Screenshot of the page
```

## Remove boilerplate code

Now that we have a workspace, user and some brands we can create a brand index page. Delete the `/views/Welcome.page.ts` and create a `BrandIndex.page.ts` file with the following contents:

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
import BrandIndex from 'views/BrandIndex.page';

export function Layout(page: BasePage, view: () => any[]) {
	return page.UI.DarkSidebar({
		menu: [
			{ name: 'Brand', href: BrandIndex.URL, icon: 'apartment' },
		],
		view,
	});
}
```

The `icon` key value should come from the [Google Material Symbol Icon Set](https://fonts.google.com/icons?icon.style=Rounded).

## Adding a title

Open the `BrandIndex.page.ts` and add the following lines:

```ts
import { BasePage } from 'oksy';
import { Layout } from './Components/Layout';

export default class BrandIndex extends BasePage {

	static URL = '/';

	view() {
		return [
			Layout(this, () => [
				this.UI.Text({ // [!code ++]
					label: 'Brands', // [!code ++]
					class: 'text-4xl text-gray-700 font-medium mb-4', // [!code ++]
				}), // [!code ++]
			]),
		];
	}
}
```

This will display a title on your page:

```
TODO: SCREENSHOT OF PAGE TITLE
```

## Adding the datatable

### Adding a white container
Under the title we add a white container that will house our datatable
```ts
Layout(this, () => [
	this.UI.Text({
		label: 'Brands',
		class: 'text-4xl text-gray-700 font-medium mb-4',
	}),
	this.UI.Container({ // [!code ++]
		class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white', // [!code ++]
		items: () => [], // [!code ++]
	}), // [!code ++]
]),
```

### Add the datatable
```ts
this.UI.Container({
	class: 'w-full flex flex-col space-y-3 px-4 py-5 sm:p-6 rounded-lg shadow bg-white',
	items: () => [
		this.UI.DataTable({ // [!code ++]
			data: () => this.database.getAllWithDraft('Brand'), // [!code ++]
			actions: [], // [!code ++]
			columns: brand => [], // [!code ++]
		}), // [!code ++]
	],
}),
```

This should display an empty datatable on your page:

```
TODO: empty datatable
```

### Add the columns
```ts
this.UI.DataTable({
	data: () => this.database.getAllWithDraft('Brand'),
	actions: [],
	columns: brand => [
		{ // [!code ++]
			name: 'Name', // [!code ++]
			view: () => [ // [!code ++]
				this.UI.Text({ label: () => brand.name ?? '' }), // [!code ++]
			], // [!code ++]
			search: () => brand.name ?? '', // [!code ++]
			sort: () => brand.name, // [!code ++]
		},// [!code ++]
		{// [!code ++]
			name: 'Amount of cars', // [!code ++]
			view: () => [ // [!code ++]
				this.UI.Text({ label: () => brand.cars.size().toString() }), // [!code ++]
			], // [!code ++]
			search: () => brand.cars.size().toString() ?? '', // [!code ++]
			sort: () => brand.cars.size(), // [!code ++]
		}, // [!code ++]
	],
}),
```

You should see 2 columns that are both **searchable** and **sortable** on your page:

```
TODO: screenshots van table
```

### Add a create button

```ts
this.UI.DataTable({
	data: () => this.database.getAllWithDraft('Brand'),
	actions: [
		{ // [!code ++]
			icon: 'add', // [!code ++]
			label: 'Add', // [!code ++]
			onClick: () => { }, // [!code ++]
		}, // [!code ++]
	],
	columns: brand => [...],
}),
```

When the user clicks the create button we want to **create a new brand model** and then **navigate the client to the edit form of the newly created brand**. Add the following lines in the `onClick` method.

```ts
const newBrand = this.database.create('Brand');
// this.client.navigate(BrandForm.getUrl(this.workspace, newBrand), 'push');
```

::: warning
The second line is commented out because we do not have a `BrandForm` class **yet**, we will create that page in the **next chapter**.
:::

### Add an actions columns

Add the following columns with an empty name (`name: ''`) to your columns:

```ts
this.UI.DataTable({
	...,
	columns: brand => [
		...,
		{ // [!code ++]
			name: '', // [!code ++]
			view: ({ refresh }) => [ // [!code ++]
				this.UI.Container({ // [!code ++]
					class: 'flex', // [!code ++]
					items: () => [ ] // [!code ++]
				}) // [!code ++]
			], // [!code ++]
		}, // [!code ++]
	],
}),
```

Now let's add an edit button to the action column.

```ts
this.UI.Container({
	class: 'flex',
	items: () => [
		this.UI.Button({ // [!code ++]
			type: 'tertiary', // [!code ++]
			ghost: true, // [!code ++]
			label: 'Edit', // [!code ++]
			icon: 'edit', // [!code ++]
			onClick: () => { // [!code ++]
				// this.client.navigate(PhoneForm.getUrl(this.workspace, phone), 'push'); // [!code ++]
			} // [!code ++]
		}), // [!code ++]
	]
})
```

::: warning
Temporarily comment out the `.navigate` line because the page does not exist yet.
:::

You should see the edit button in the action columns

```
TODO: Add screenshot
```

Now let's add a delete button to the datatable:

```ts
this.UI.Container({
	class: 'flex',
	items: ({ refresh }) => [ // [!code ++]
		this.UI.Button({ ... }), // the edit button
		this.UI.Button({ // [!code ++]
			type: 'danger', // [!code ++]
			ghost: true, // [!code ++]
			label: 'Delete', // [!code ++]
			icon: 'delete', // [!code ++]
			onClick: async () => { // [!code ++]
				const confirm = await this.client.confirm( // [!code ++]
					'Are you sure?', // [!code ++]
					'All the cars that belong to this brand will also be deleted. This action can not be reversed!', // [!code ++]
					'Yes, delete brand.' // [!code ++]
				); // [!code ++]
				if (confirm) { // [!code ++]
					this.database.delete(brand); // [!code ++]
					refresh(); // [!code ++]
				} // [!code ++]
			} // [!code ++]
		}) // [!code ++]
	]
})
```

When the user clicks on the delete button we show a confirm dialog. If the users accepts the confirm **only** then will the brand be deleted.

The `refresh` method manually refreshed the datatable after deletion. This method is imported from `items: ({ refresh }) => [`. (a couple of lines above).