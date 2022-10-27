# Core

OKSY comes with authentication and multi-workspace support out of the box.

## Models

In the `Core` folder, you find `User.ts`, `Membership.ts` and `Workspace.ts`.
These models come preconfigured with the correct relations for a multi-tenant application.

They allow the following:

![workspace-diagram](/workspace-diagram.jpg)

In this example, we have 2 `Workspaces` and 2 `Users` (Daniel and Anne). Daniel can access **both Workspaces** and Sarah can only access **Workspace 2**. This means that **Invoice 1** and **Invoice 2** are **not visible** to Anne.

## Frontend

OKSY comes with built-in authentication screens.

### Login

![login](/auth/login.png)

### Choose Workspace

![workspace](/auth/workspace.png)

### Register

![register](/auth/register.png)

::: tip
Can be disabled through `oksy.config.ts`.
:::

### Password forget

![forgot](/auth/forgot.png)

::: warning
Only works if mail credentials are configured in `oksy.config.ts`
:::

### Password reset

![reset](/auth/reset.png)