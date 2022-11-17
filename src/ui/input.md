<script setup>
import BaseInput from '../../../SRC/public/src/Components/Base/BaseInput.vue'
</script>

# Inputs

The examples below are based on the following model:

```ts
export class Customer extends Entity {
    name: string
    age: number
}
```

## Text Input

```ts
this.UI.Input({
    setter: value => this.customer.name = value,
    getter: () => this.customer.name,
});
```

<BaseInput />

## Number Input

```ts{4}
this.UI.Input({
    setter: value => this.customer.age = value,
    getter: () => this.customer.age,
    type: 'number',
});
```

<BaseInput type="number" />

## Disabled Input

```ts{4}
this.UI.Input({
    setter: value => this.customer.name = value,
    getter: () => this.customer.name,
    disabled: true,
});
```

<BaseInput disabled />