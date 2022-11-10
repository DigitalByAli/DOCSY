<script setup>
import BaseToggle from '../../../SRC/public/src/Components/Base/BaseToggle.vue'
</script>

# Toggle

## Default

```ts
this.UI.Toggle({
    state: () => this.authUser.isCool,
    onToggle: newState => this.authUser.isCool = newState
});
```

<BaseToggle />

## Disabled

```ts{4}
this.UI.Toggle({
    state: () => this.authUser.isCool,
    onToggle: newState => this.authUser.isCool = newState,
    disabled: true,
});
```

<BaseToggle disabled />