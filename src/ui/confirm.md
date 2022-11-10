# Confirm

```ts{4}
this.UI.Button({
    label: 'Click me!',
    onClick: async () => {
        const confirm = await this.client.confirm(
            'Are you sure?',
            'This can not be undone!',
            'Yes, Delete!'
        );
        
        if (confirm) {
            this.client.toast('success', `Delete`);
        }
    }
})
```

```
TODO: SCREENSHOT
```