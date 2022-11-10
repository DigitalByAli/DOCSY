# Text

## Static value

```ts
this.UI.Text({
    label: 'Hallo 🥹',
    class: 'text-2xl text-green-500 font-bold'
});
```

<p class="tw-text-2xl tw-text-green-500 tw-font-bold">Hallo 🥹</p>

## Reactive value

```ts
this.UI.Text({
    label: () => this.authUser.name,
    class: 'text-xl text-green-700'
});
```