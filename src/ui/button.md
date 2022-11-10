<script setup>
import BaseButton from '../../../SRC/public/src/Components/Base/BaseButton.vue'

function clicky() {
    alert("You clicked a button!");
}
</script>

# Buttons

## Primary Button

```ts
this.UI.Button({
    label: 'Primary',
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    label="Primary"
/>

## Secondary Button

```ts
this.UI.Button({
    label: 'Secondary',
    type: 'secondary',
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    type="secondary"
    label="Secondary"
/>

## Tertiary Button

```ts
this.UI.Button({
    label: 'Tertiary',
    type: 'tertiary',
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    type="tertiary"
    label="Tertiary"
/>

## Danger Button

```ts
this.UI.Button({
    label: 'Danger',
    type: 'danger',
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    type="danger"
    label="Danger"
/>

## Button with Icon

```ts
this.UI.Button({
    label: 'Danger',
    type: 'danger',
    icon: 'delete'
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    type="danger"
    label="Danger"
    icon='delete'
/>

## Icon only Button

```ts
this.UI.Button({
    type: 'danger',
    icon: 'delete'
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    class='tw-inline-flex'
    type="danger"
    icon='delete'
/>

## Ghosts Buttons

```ts
this.UI.Button({
    label: 'Danger',
    type: 'danger',
    icon: 'delete'
    ghost: true,
    onClick: () => { ... }
});
```

<div class='tw-flex tw-space-x-3'>
    <BaseButton
        @clicked="clicky"
        class='tw-inline-flex'
        label="Add"
        icon='add'
        ghost
    />
    <BaseButton
        @clicked="clicky"
        class='tw-inline-flex'
        type="danger"
        label="Delete"
        icon='delete'
        ghost
    />
</div>

## Small

```ts
this.UI.Button({
    label: 'Primary',
    size: 'sm',
    onClick: () => { ... }
});
```

<div class='tw-flex tw-space-x-3'>
    <BaseButton
        @clicked="clicky"
        size='sm'
        class='tw-inline-flex'
        label="Add"
    />
    <BaseButton
        @clicked="clicky"
        size='sm'
        class='tw-inline-flex'
        type="danger"
        label="Delete"
    />
</div>

## Disabled

```ts
this.UI.Button({
    label: 'Primary',
    disabled: true,
    onClick: () => { ... }
});
```

<div class='tw-flex tw-space-x-3'>
    <BaseButton
        @clicked="clicky"
        class='tw-inline-flex'
        label="Add"
        disabled
    />
    <BaseButton
        @clicked="clicky"
        class='tw-inline-flex'
        type="danger"
        label="Delete"
        disabled
    />
</div>