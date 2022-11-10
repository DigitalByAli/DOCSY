# Pages

All page files should be kept in the `/views` folder and be suffixed with `*.page.ts`.

## Basic page

```ts
import { BasePage } from 'oksy';

export default class HelloWorld extends BasePage {
    
    static URL = '/';

    view() {
        return [
            this.UI.Text({
                label: 'Your journey starts here 🧑‍🚀',
                class: 'text-xl'
            })
        ];
    }
}
```

Each page should extend from the `BasePage` class and specify the `URL` and `view` properties.

## URL Parameters

```ts
import { BasePage } from 'oksy';

export class MealEdit extends BasePage {
    static URL = '/customer/:customerId'

    init(customerId: string) {
        const customer = this.database.getById('Customer', customerId);
        if (customer === null) return false;
    }
}
```

The `init` function is called before the page is rendered. The parameters of the URL are passed in as arguments. If the `init` function returns a `false` then a `404` page will be rendered to the user.

## User interactions

### Toast

```ts
this.UI.Button({
    label: 'Click me!',
    onClick: () => this.client.toast('success', 'You clicked the button')
})
```

```ts
type toast = (
    type: 'success' | 'error',
    message: string
) => void
```

### Prompt

```ts
this.UI.Button({
    label: 'Click me!',
    onClick: async () => {
        const name = await this.client.prompt('What is your name?');
        this.client.toast('success', `Hello, ${name}`)
    }
})
```

```ts
type prompt = (
    message: string
) => Promise<'CANCEL' | string>
```

### Confirm

```ts
this.UI.Button({
    label: 'Click me!',
    onClick: async () => {
        const confirm = await this.client.confirm('Are you sure?', 'This can not be undone.', 'Yes, Delete!');
        if (confirm) {
            this.client.toast('success', `Delete`);
        }
    }
})
```

```ts
type confirm = (
    title: string,
    message: string,
    primaryButtonText: string = 'Confirm'
) => Promise<boolean>
```

### Navigate

```ts
this.UI.Button({
    label: 'Click me!',
    onClick: () => {
        this.client.navigate('https://google.com', 'blank');
    }
})
```

```ts
type navigate = (
    url: string,
    type: 'push' | 'replace' | 'hard' | 'blank' = 'push'
) => void
```