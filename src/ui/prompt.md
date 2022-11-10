# Prompt

```ts{4}
this.UI.Button({
    label: 'Click me!',
    onClick: async () => {
        const name = await this.client.prompt('What is your name?');
        if (name === 'CANCEL') {
            this.client.toast('error', `You pressed the cancel button.`)
        }else{
            this.client.toast('success', `Hello, ${name}`)
        }
    }
})
```

The prompt returns the string that the user typed in the input or it returns the string `'CANCEL'` if the user pressed the cancel button;

```
TODO: SCREENSHOT
```