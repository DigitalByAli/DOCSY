# Toast

## Success toast
```ts{4}
this.UI.Button({
    label: 'Click me!',
    onClick: () => {
        this.client.toast('success', 'You clicked the button')
    }
})
```

```
TODO: SCREENSHOT
```

## Error toast
```ts{4}
this.UI.Button({
    label: 'Click me!',
    onClick: () => {
        this.client.toast('error', 'You clicked the button')
    }
})
```

```
TODO: SCREENSHOT
```