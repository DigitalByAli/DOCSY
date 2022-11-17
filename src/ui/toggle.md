<script setup>
import BaseToggle from '../../../SRC/public/src/Components/Base/BaseToggle.vue'
</script>

# Toggle

The examples below are based on the following model:

```ts
export class Customer extends Entity {
    isLoyal: boolean
}
```

## Default

```ts
this.UI.Toggle({
    state: () => customer.isLoyal,
    onToggle: newState => customer.isLoyal = newState
});
```

<BaseToggle />

## Disabled

```ts{4}
this.UI.Toggle({
    state: () => customer.isLoyal,
    onToggle: newState => customer.isLoyal = newState,
    disabled: true,
});
```

<BaseToggle disabled />