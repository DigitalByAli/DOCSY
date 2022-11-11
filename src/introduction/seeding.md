# Seeding

Seeding is the process of adding a starting set of data to your database. Create a new file and folder `/seed/seed.ts` with the following content:

```ts
import { hash, seed } from 'oksy';
import { Membership } from '../models/Core/Membership';

export default seed(async ({ reactiveStore, sqliteClient }) => {

    // optional: reset the database
	for (const tableName of await sqliteClient.getTableNames()) {
		if (tableName === 'session') continue; // don't delete the `session` table
		await sqliteClient.dropAllRows(tableName);
	}

    // create a new workspace
    const workspace = reactiveStore.modelMaker.create('Workspace');
	workspace.name = 'My Project';

    // create an admin user
    const user = reactiveStore.modelMaker.create('User');
	user.name = 'admin';
	user.email = 'info@admin.nl';
	user.passwordHash = hash('password'); // password is 'password'

    // add admin user to the workspace
    const membership: Membership = workspace.database.create('Membership');
	membership.user = user;
	membership.workspace = workspace;

    // add the toyota brand
    const brand1 = workspace.database.create('Brand');
    brand1.name = 'Toyota';

    // add the mercedes-benz brand
    const brand2 = workspace.database.create('Brand');
    brand2.name = 'Mercedes-Benz';
});
```

The seeder only runs **on boot** of OKSY, so for your seeder to take effect we need to **restart the server**. Press `<ctrl> + c` to stop the server.