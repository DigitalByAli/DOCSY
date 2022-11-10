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