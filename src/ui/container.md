# Container

```ts
this.UI.Container({
    class: 'flex space-x-3 bg-green-200 justify-between p-3',
    items: () => [
        this.UI.Text({ label: 'Label1' }),
        this.UI.Text({ label: 'Label2' }),
    ]
});
```

<div class='tw-flex tw-space-x-3 tw-bg-green-200 tw-justify-between tw-p-3'>
    <span>Label1</span>
    <span>Label2</span>
</div>