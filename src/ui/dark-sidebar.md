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

<img src="/ui/dark-sidebar.png" class='tw-rounded' />

## Subroute highlight

A common scenario that you will find yourself in is: highlighting a menu item on multiple routes. For example: a menu item called `Books` that needs to be highlighted on the `/books` route and the `/books/:bookId` route.

This is where the `highlight` key comes into play.<br/>Let's take the following code as an example:

```ts{4}
export function Layout(page: BasePage, view: () => any[]) {
    return page.UI.DarkSidebar({
        menu: [
            { name: 'Books', href: '/books', highlight: '/books/:bookId', icon: 'book' },
        ],
        view,
    });
}
```

This menu item navigates the user to the `/books` route and will be in an active state if the route **begins** with  `/books/:bookId`:
```
/books
/books/1
/books/1/export
```

::: info
Notice that the `/books/1/export` will also highlight the menu item because the route **begins** with `/books/:bookId`.
:::