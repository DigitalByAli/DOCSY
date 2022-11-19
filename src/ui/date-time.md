<script setup>
import BaseDateTime from '../../../SRC/public/src/Components/Base/BaseDateTime.vue'
</script>

# DateTime

The example below is based on the following model:

```ts
export class Trip extends Entity {
    departsAt: Dayjs
}
```

```ts
this.UI.DateTime({
    setter: value => trip.departsAt = value,
    getter: () => trip.departsAt,
});
```

<BaseDateTime />

## To Local

All dates are automatically converted to UTC when saved to the database.
If you want to display the date to the user relative to his local time the `MM-DD` format you can do so with the following code:

```ts{2}
this.UI.Text({
    label: () => this.client.toLocalDate(trip.departsAt).format('MM-DD')
})
```