<script lang="ts">
  import { alltodo } from "$lib";
  import { Button, Input } from "geist-ui-svelte";
  let value = "";
  let addTodo = () => {
    if (value.length > 0) {
      alltodo.update((n) => {
        n = [
          ...n,
          { id: crypto.randomUUID(), title: value, iscompleted: false },
        ];
        return n;
      });
      value = "";
    }
  };
</script>

<div>
  <form class="flex gap-3" on:submit|preventDefault={addTodo}>
    <Input type="text" bind:value placeholder="Todo Text or Quote" />
    <Button color="secondary" type="submit">Add</Button>
  </form>
</div>
