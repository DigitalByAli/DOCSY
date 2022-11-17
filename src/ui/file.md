<script setup>
import BaseFile from '../../../SRC/public/src/Components/Base/File/BaseFile.vue'
</script>

# File

The examples below are based on the following models:

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
        { id: '1', name: 'Bader CV.pdf', displayName: 'Bader' },
        { id: '2', name: 'Saba CV.pdf', displayName: 'Saba' },
    ]"
    :uploading-files="[
        { id: '1', name: 'Bader CV.pdf', percentage: () => 33 },
    ]"
/>