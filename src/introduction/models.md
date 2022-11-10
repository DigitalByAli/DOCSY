# Models

After installing and running OKSY you should see that some files and folders have been generated.

Create a new file `models/Brand.ts` and add the following

```ts
import { Entity } from 'oksy';

export class Brand extends Entity {
    name: string
    cars: Many<Car, 'brand'>
}
```

And create the `models/Car.ts` file with the following contents:

```ts
import { Entity } from 'oksy';

export class Car extends Entity {
    brand: One<Brand, 'cars'>
    model: string
}
```

You need to restart the server after modifying the `/models` folder. You can type `oksy` to start the OKSY server if you are inside the Docker container. After restarting the server you should have 2 new tables (`brand` and `car`) added to your database (`database.sqlite`)

```
TODO: SCREENSHOT VAN 2 TABBELLEN
```