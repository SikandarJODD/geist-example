<script>
  import { alltodo, completedTodo, pendingTodo } from "$lib";
  import InputCard from "$lib/components/InputCard.svelte";
  import TodoCard from "$lib/components/TodoCard.svelte";
  import { Text } from "geist-ui-svelte";
  import { fade } from "svelte/transition";
  import { Button } from "geist-ui-svelte";
  import { flip } from "svelte/animate";
  $: todo = $alltodo;
  let allTodo = () => {
    todo = $alltodo;
  };
  let completed = () => {
    todo = $completedTodo;
  };
  let pending = () => {
    todo = $pendingTodo;
  };
</script>

<div class="dark:bg-gray-900">
  <div class=" justify-center flex my-4 flex-col items-center gap-3">
    <Text type="h2" size="5xl">Geist-UI-Svelte</Text>
    <Text color="success" type="h3">CRUD Application</Text>
  </div>
  <div class="justify-center flex mt-4 flex-col items-center">
    <InputCard />
  </div>
  <div class="justify-center flex mt-4 flex-wrap flex-col items-center">
    <div class="flex items-center gap-3 flex-wrap md:flex-row">
      <Button color="secondary" on:click={allTodo}>All</Button>
      <Button on:click={completed}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-check-circle-2 mr-2"
          ><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg
        >
        Completed</Button
      >
      <Button on:click={pending}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-dot mr-2"
          ><circle cx="12" cy="12" r="10" /><circle
            cx="12"
            cy="12"
            r="1"
          /></svg
        >
        Pending</Button
      >
    </div>
  </div>
  <div class="px-2 md:px-4 lg:px-32">
    <div in:fade class="gap-3 mb-5 flex flex-wrap justify-center mt-10">
      {#each todo as item (item.id)}
        <TodoCard {...item} />
      {/each}
    </div>
  </div>
</div>
