import { derived, writable } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export let alltodo = writable([
    {
        id: crypto.randomUUID().toString(),
        title: "Make Life Simple by using Geist UI Svelte",
        iscompleted: true,
    },
    {
        id: crypto.randomUUID().toString(),
        title: "Pending List will be shown here",
        iscompleted: false,
    },
])

export let completedTodo = derived(alltodo, $alltodo => {
    return $alltodo.filter(todo => todo.iscompleted)
});

export let pendingTodo = derived(alltodo, $alltodo => {
    return $alltodo.filter(todo => !todo.iscompleted)
});