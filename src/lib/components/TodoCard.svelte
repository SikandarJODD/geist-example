<script lang="ts">
  import { scale } from "svelte/transition";
  import { Card, Text, Checkbox, Modal, Input } from "geist-ui-svelte";
  import { alltodo } from "$lib";
  export let iscompleted = true;
  export let title = "";
  export let id: any;
  let isChanged = () => {
    alltodo.update((n) => {
      n.map((item) => {
        if (item.id === id) {
          item.iscompleted = !item.iscompleted;
        }
        return item;
      });
      return n;
    });
  };
  let showFirstExample = false;
  let stitle = title;
  let ref = null;
  let saveTodo = () => {
    alltodo.update((n) => {
      n.map((item) => {
        if (item.id === id) {
          item.title = stitle;
        }
        return item;
      });
      return n;
    });
    showFirstExample = false;
  };
</script>

<div class="w-full md:w-fit" in:scale>
  <Card class="border border-slate-600 flex relative items-center gap-2">
    <Checkbox bind:checked={iscompleted} on:change={isChanged}>
      <Text type="p">{title}</Text>
    </Checkbox>
    <div>
      <button
        on:click={() => {
          showFirstExample = true;
          ref.focus();
        }}
        class="rounded-full border p-1 border-gray-500 hover:bg-gray-100 active:bg-emerald-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-pencil"
          ><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path
            d="m15 5 4 4"
          /></svg
        >
      </button>
    </div>
  </Card>
</div>
<Modal bind:visible={showFirstExample} class="sm:w-[640px] sm:h-[240px]">
  <div class="flex flex-col h-full">
    <div class="flex flex-col px-1 md:px-8 py-4 gap-2">
      <Text type="h3">Edit Todo</Text>
      <Text type="p" color="secondary"
        >Edit your todo here. You can also add quotes here.s</Text
      >
      <form
        class="flex flex-col md:flex-row gap-3"
        on:submit|preventDefault={saveTodo}
      >
        <input
          type="text"
          class="border border-gray-500 rounded-md p-2 w-full"
          bind:value={stitle}
          bind:this={ref}
        />
        <!-- <Input type="text" bind:value={stitle} bind:this={ref} class="w-full" /> -->
        <div class="flex gap-2">
          <button type="submit" class="border border-gray-500 rounded-md p-2">
            Save
          </button>
          <button
            type="button"
            class="border border-gray-500 rounded-md p-2"
            on:click={() => (showFirstExample = false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</Modal>
