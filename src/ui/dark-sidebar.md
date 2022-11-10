# Dark Sidebar

The `DarkSidebar` should be extracted to a separate file (for example `Layout.ts`) because it is used on every page.

Example of `Layout.ts`:

```ts
import { BasePage } from 'oksy';
import HomePage from './../Home.page';

export function Layout(page: BasePage, view: () => any[]) {
    return page.UI.DarkSidebar({
        menu: [
            { name: 'Home', href: HomePage.URL, icon: 'rocket_launch' },
        ],
        view,
    });
}
```

This is how you would use the `Layout` function in your pages:

```ts{10-12}
import { BasePage } from 'oksy';
import { Layout } from './Components/Layout';

export default class HomePage extends BasePage {
    
    static URL = '/';

    view() {
        return [
            Layout(this, () => [
                // UI COMPONENTS HERE
            ]),
        ];
    }
}
```

```
TODO: SCREENSHOT
```