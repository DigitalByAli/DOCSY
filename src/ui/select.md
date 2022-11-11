<script lang='ts' setup>
import BaseSelect from '../../../SRC/public/src/Components/Base/Select/BaseSelect.vue'
import { ref } from 'vue'

const PER_PAGE = 5;

const wizards = ref([
    { "id": "W-0", "label": "Harry Potter" },
    { "id": "W-1", "label": "Hermione Granger" },
    { "id": "W-2", "label": "Lord Voldemort" },
    { "id": "W-3", "label": "Professor Albus Dumbledore" },
    { "id": "W-4", "label": "Draco Malfoy" },
    { "id": "W-5", "label": "Professor Severus Snape" },
    { "id": "W-6", "label": "Rubeus Hagrid" },
    { "id": "W-7", "label": "Luna Lovegood" },
    { "id": "W-8", "label": "Ron Weasley" },
    { "id": "W-9", "label": "Dobby" },
    { "id": "W-10", "label": "Professor Minerva McGonagall" },
    { "id": "W-11", "label": "Sirius Black" },
    { "id": "W-12", "label": "Bellatrix Lestrange" },
    { "id": "W-13", "label": "Neville Longbottom" },
    { "id": "W-14", "label": "Remus Lupin" },
    { "id": "W-15", "label": "Dolores Umbridge" },
]);

const users = ref([
    { "id": "U-0", "label": "harry_potter@gmail.com" },
    { "id": "U-1", "label": "hermione_granger@outlook.com" },
    { "id": "U-2", "label": "lord_voldemort@outlook.com" },
    { "id": "U-3", "label": "professor_albus_dumbledore@gmail.com" },
    { "id": "U-4", "label": "draco_malfoy@gmail.com" },
    { "id": "U-5", "label": "professor_severus_snape@outlook.com" },
    { "id": "U-6", "label": "rubeus_hagrid@gmail.com" },
    { "id": "U-7", "label": "luna_lovegood@outlook.com" },
    { "id": "U-8", "label": "ron_weasley@outlook.com" },
    { "id": "U-9", "label": "dobby@outlook.com" },
    { "id": "U-10", "label": "professor_minerva_mcgonagall@gmail.com" },
    { "id": "U-11", "label": "sirius_black@gmail.com" },
    { "id": "U-12", "label": "bellatrix_lestrange@gmail.com" },
    { "id": "U-13", "label": "neville_longbottom@outlook.com" },
    { "id": "U-14", "label": "remus_lupin@gmail.com" },
    { "id": "U-15", "label": "dolores_umbridge@outlook.com" },
]);

const selectedUsers = ref([]);
const selectedWizards = ref([]);

function deselectWizard(id) {
	selectedWizards.value = selectedWizards.value.filter(item => item.id !== id);
}

function selectWizard(item) {
	selectedWizards.value.push(item);
}

async function requestWizards(pageNumber, query) {
	const from = (pageNumber - 1) * PER_PAGE;
	const to = from + PER_PAGE;

	return {
		totalWithoutFilter: wizards.value.length,
		items: wizards.value.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).slice(from, to),
	};
}

function deselectUser(id) {
	selectedUsers.value = selectedUsers.value.filter(item => item.id !== id);
}

function selectUser(item) {
	selectedUsers.value.push(item);
}

async function requestUsers(pageNumber, query) {
	const from = (pageNumber - 1) * PER_PAGE;
	const to = from + PER_PAGE;

	return {
		totalWithoutFilter: users.value.length,
		items: users.value.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).slice(from, to),
	};
}
</script>

# Select

The select can be used for `One to Many` and `Many to Many` relationships. We will use the following 2 models in the examples below.

```ts
export class User extends BaseUser {
    favoriteWizard: null | One<Wizard, 'favoriteOfUsers'>
}

export class Wizard extends Entity {
    name: string
    favoriteOfUsers: Many<User, 'favoriteWizard'>
}
```

## Select One

<BaseSelect
    :request="requestWizards"
    :selected="selectedWizards"
    @deselect="deselectWizard"
    @select="selectWizard"
/>

```ts
this.UI.SelectOne({
    options: () => {
        return this.database.getAll('Wizard').map(wizard => {
            return { id: wizard.id, label: wizard.name }
        })
    },
    onSelect: favoriteWizard => {
        if (favoriteWizard === null) {
            this.authUser.favoriteWizard = null
        } else {
            this.authUser.favoriteWizard = this.database.getById('Wizard', favoriteWizard.id)
        }
    },
    selected: () => {
        if (this.authUser.favoriteWizard === null) {
            return null
        } else {
            return { 
                id: this.authUser.favoriteWizard.id,
                label: this.authUser.favoriteWizard.name
            }
        }
    },
}),
```

1. The `options` key expects an array of `SelectItem` items.

```ts
type SelectItem = { id: string, label: string }
```

2. The `selected` key should return the current selected value as a `SelectItem` object or `null` if no value is selected

3. The `onSelect` is fired when a user selected a value or clears the value in the select (the value will be `null` if the user deselects or clears the select).

```ts
type onSelect = (selectedItem: null | SelectItem) => void
```

## Select Many

<!-- <BaseSelect
    :request="requestUsers"
    :selected="selectedUsers"
    @deselect="deselectUser"
    @select="selectUser"
    multiple
/> -->

```ts
this.UI.SelectMany({
    options: () => {
        return this.database.getAll('User').map(user => {
            return { id: user.id, label: user.email }
        })
    },
    selected: () => {
        return this.wizard.favoriteOfUsers.map(user => {
            return { id: user.id, label: user.email }
        })
    },
    onSelect: item => {
        const user = this.database.getById('User', item.id);
        this.wizard.favoriteOfUsers.add(user);
    },
    onDeselect: item => {
        const user = this.database.getById('User', item.id);
        this.wizard.favoriteOfUsers.remove(user);
    },
}),
```

1. The `options` key expects an array of `SelectItem` items.

```ts
type SelectItem = { id: string, label: string }
```

2. The `selected` key should return an array of currently selected `SelectItem` objects.

3. The `onSelect` is fired when a user **selected** a value.

```ts
type onSelect = (selectedItem: SelectItem) => void
```

3. The `onDeselect` is fired when a user **de-selected** a value.

```ts
type onDeselect = (selectedItem: SelectItem) => void
```