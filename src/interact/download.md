# Download

You can download a file using `.download`

## Example 1

Downloading a file from a URL

```ts{4}
this.UI.Button({
    label: 'Download',
    onClick: () => {
        this.client.download('https://www.w3schools.com/images/myw3schoolsimage.jpg')
    }
});
```

## Example 2

Download a generated [jsPDF](https://github.com/parallax/jsPDF) document.

```ts{4-6}
this.UI.Button({
    label: 'Download',
    onClick: () => {
        const doc = new jsPDF();
        doc.text('Hello world!', 10, 10);
        this.client.download(doc.output('dataurlstring'));
    }
});
```