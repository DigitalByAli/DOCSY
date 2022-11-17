<script setup>
import BaseDateTime from '../../../SRC/public/src/Components/Base/BaseDateTime.vue'
</script>

# DateTime

The examples below are based on the following model:

```ts
export class Customer extends Entity {
    birthDate: Dayjs
}
```

```ts
this.UI.DateTime({
    setter: value => customer.birthDate = value,
    getter: () => customer.birthDate,
});
```

<BaseDateTime />