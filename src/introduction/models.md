# Models

After installing and running OKSY you should see that some files and folders have been generated.

Create a new file `/models/Brand.ts` and add the following

```ts
import { Entity, Many } from 'oksy';
import { Car } from './Car';

export class Brand extends Entity {
    name: string
    cars: Many<Car, 'brand'>
}
```

And create the `/models/Car.ts` file with the following contents:

```ts
import { Entity, One } from 'oksy';
import { Brand } from './Brand';

export class Car extends Entity {
    brand: One<Brand, 'cars'>
    model: string
}
```

You need to restart the server after modifying the `/models` folder. After restarting the server you should have 2 new tables (`brand` and `car`) added to your database (`/storage/database.sqlite`)