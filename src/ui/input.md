<script setup>
import BaseInput from '../../../SRC/public/src/Components/Base/BaseInput.vue'
</script>

# Inputs

## Text Input

```ts
this.UI.Input({
    setter: value => this.authUser.name = value,
    getter: () => this.authUser.name,
});
```

<BaseInput />

## Number Input

```ts{4}
this.UI.Input({
    setter: value => this.authUser.age = value,
    getter: () => this.authUser.age,
    type: 'number',
});
```

<BaseInput type="number" />

## Disabled Input

```ts{4}
this.UI.Input({
    setter: value => this.authUser.name = value,
    getter: () => this.authUser.name,
    disabled: true,
});
```

<BaseInput disabled />