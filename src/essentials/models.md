# Models

Models are placed in the `/models` directory and are kept automatically in sync with the database and UI.

## Defining a model

```ts
import { Entity } from 'oksy';
import { Dayjs } from 'dayjs';

export class Customer extends Entity {
    firstName: string
    lastName: string
    birthDate: null | Dayjs
    loyal: boolean = false
}
```

::: danger
Only the `null` `string` `number` `boolean` `Dayjs` are supported.
:::

## One to Many
```ts{7,13}
import { Entity, One, Many } from 'oksy';
import { Dayjs } from 'dayjs';

export class Product extends Entity {
    name: string
    price: number
    reviews: Many<Review, 'product'>
}

export class Review extends Entity {
    rating: number
    comment: string
    product: One<Product, 'reviews'>
}
```

## Many to Many
```ts{6,11}
import { Entity, One, Many } from 'oksy';
import { Dayjs } from 'dayjs';

export class Student extends Entity {
    name: string
    teachers: Many<Teacher, 'studends'>
}

export class Teacher extends Entity {
    name: string
    studends: Many<Student, 'teachers'>
}
```

## Global Entity

If a model should be accessible through every Workspace you have to define it as a **Global Entity**

```ts{7,13}
import { GlobalEntity } from 'oksy';

export class BuildingType extends GlobalEntity {
    name: string
}
```