# Config

This page lists the keys that you can customize in the `oksy.config.ts` file.

## name

- Required
- Type: `string`

The name of your app.

- Used for `<title>` in `<head>` 
- Used as PWA app name

## appUrl

- Type: `string`
- Default: `http://0.0.0.0:8000`

The URL of your app.

## register

- Type: `boolean`
- Default: `true`

If users are allowed to register.

## hoursSessionValid

- Type: `number`
- Default: `24 * 7`

Amount of hours a user session is valid for. The more sensitive data you store the lower this number should be.

## minutesForgotPasswordLinkValid

- Type: `number`
- Default: `30`

Amount of minutes a password reset link is valid for.

## minimumPasswordLength

- Type: `number`
- Default: `5`

The minimum length of a password.

## mail

- Type: `'mail' | SMTPConfig`
- Default: `mail`

The driver user for sending email.

```ts
export type SMTPConfig = {
    host: string
    port: number
    username: string
    password: string
    from: string
}
```

## hmacKey

- Type: `string`
- Default: **randomlyGenerated**

The key used for password hashing.

## maxUploadFileSizeMB

- Type: `number`
- Default: `50`

The maximum file size in megabytes that a user can upload.