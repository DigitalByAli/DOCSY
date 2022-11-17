<script setup>
import BaseFile from '../../../SRC/public/src/Components/Base/File/BaseFile.vue'
</script>

# File

The example below is based on the following models:

```ts
export class Product extends Entity {
    images: number
}
```
```ts
this.UI.File({
    files: () => product.images.all(),
    onUpload: file => product.images.add(file),
    onDelete: file => this.database.delete(file),
}),
```

<BaseFile
    :uploaded-files="[
        { id: '2', name: 'Image2.png', displayName: 'Image2.png' },
        { id: '1', name: 'Image1.png', displayName: 'Image1.png' },
    ]"
    :uploading-files="[
        { id: '1', name: 'Image3.png', percentage: () => 33 },
    ]"
/>

## Show confirm

```ts{5-12}
this.UI.File({
    files: () => product.images.all(),
    onUpload: file => product.images.add(file),
    onDelete: async file => {
        const confirm = await this.client.confirm(
            'Are you sure?',
            'This action cannot be reversed!',
            'Yes, delete image.'
        );
        if (confirm) {
            this.database.delete(file);
        }
    }
}), 
```

## Change file size limit

You can modify the limit using the `maxUploadFileSizeMB` key in your config. Look at the [config page](/essentials/config#maxuploadfilesizemb) for more information.