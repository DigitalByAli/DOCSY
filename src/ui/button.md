<script setup>
import BaseButton from '../../../SRC/public/src/Components/Base/BaseButton.vue'

function clicky() {
    alert("You clicked a button!");
}
</script>

# Button

## Normal buttons

```ts
this.UI.Button({
    label: 'Click me!',
    onClick: () => { ... }
});
```

<BaseButton
    @clicked="clicky"
    type="primary"
    label="Primary"
/>

## Ghosts

## Small

## Icon

## Disabled