# Navigate

You can navigate the user to an internal URL or an external URL by using `.navigate`.

## Example 1

Navigating the user to an **internal** page on a button click.

```ts{4}
this.UI.Button({
    label: 'Navigate',
    onClick: () => {
        this.client.navigate('/home')
    }
});
```

## Example 2

Navigating the user to an **external** page on a button click.<br/>
The URL must start with `https:` or `https:` for this to work.

```ts{4}
this.UI.Button({
    label: 'Go to Google',
    onClick: () => {
        this.client.navigate('https://google.com/')
    }
});
```

## Example 3

Navigate the user to a [jsPDF](https://github.com/parallax/jsPDF) document preview in a new tab.

```ts{4-6}
this.UI.Button({
    label: 'Download',
    onClick: () => {
        const doc = new jsPDF();
        doc.text('Hello world!', 10, 10);
        this.client.navigate(doc.output('dataurlstring'), 'blank');
    }
});
```

## Types of navigation

You can also define a the navigation behaviour with the second parameter `type`.

```ts
this.client.navigate('/home', 'push') // add history item
this.client.navigate('/home', 'replace') // does not add history item
this.client.navigate('/home', 'hard') // visits page using a hard reload
this.client.navigate('/home', 'blank') // visits the url in a new tab
```