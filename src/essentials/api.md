# API

Your application will start as an isolated project but eventually, it will have to communicate to other systems in your eco-system.
This is where APIs come into play, they allow you to create HTTP endpoints that can handle the request made by external services.

## GET API

Lets create a HTTP API that returns will return all the users in the system.

Create a new file `/api/ExportUsers.controller.ts`

::: danger IMPORTANT
The file must be placed in the `/api` folder and end with `.controller.ts.`
:::

Add the following content to the file:

```ts
import { BaseController, HttpResponse } from 'oksy';

export default class ExportUsersController extends BaseController {

	static URL = '/v1/users';

	public GET() {
        const users = this.reactiveStore.getAll('User').map(user => {
			return {
                id: u.id,
				name: u.name,
				email: u.email,
			};
		});

		return new HttpResponse(200, users);
	}

}
```

This API will be hosted at <code>localhost:8000<b>/api/v1/users</b></code> and will return all the users.

## POST API

Lets create an API endpoint that handles a POST request and creates a new `Product` in our database.

Create a new file `/api/ProductCreate.controller.ts` with the following contents:

```ts
import { BaseController, HttpResponse } from 'oksy';

export default class ProductCreateController extends BaseController {

	static URL = '/v1/products/:workspaceId/new';

	public POST({ json, url }) {
        const workspace = this.reactiveStore.getById('Workspace', url.query.workspaceId);
        
        if (workspace === null) {
            return new HttpResponse(404);
        }

        const product = workspace.database.create('Product');
        product.name = json.name;
        product.price = parseFloat(json.price);

		return new HttpResponse(201, product);
	}

}
```

## Methods and Parameters

You notice that the `POST` method has 2 parameters `json` and `query`, they contain extra information about the request. Here is a list of all the methods with their parameters:

<table>
<tr><td><b>Parameter</b></td><td><b>Type</b></td></tr>

<tr>
<td><code>method</code></td>
<td>

```ts
'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
```
</td>
</tr>

<tr>
<td><code>url</code></td>
<td>
    
```ts
{ 
    path: string,
    query: Record<string, string>,
    fullUrl: string,
}
```
</td>
</tr>

<tr>
<td><code>json</code></td>
<td>
    
```ts
undefined | any
```
</td>
</tr>

<tr>
<td><code>body</code></td>
<td>
    
```ts
undefined | string
```
</td>
</tr>

</table>

| Parameter | `method` | `url` | `json` | `body` |
| --- | :---: | :---: | :---: | :---: |
| `ALL` | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| `GET` | 🔴 | 🟢 | 🔴 | 🔴 | 🔴 |
| `POST` | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |
| `PUT` | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |
| `PATCH` | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |
| `DELETE` | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |