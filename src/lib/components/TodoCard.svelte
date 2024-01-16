<script lang="ts">
  import { scale } from "svelte/transition";
  import { Card, Text, Checkbox } from "geist-ui-svelte";
  import { alltodo } from "$lib";
  export let iscompleted = true;
  export let title = "";
  export let id: any;
  let isChanged = () => {
    console.log(iscompleted, id);
    console.log($alltodo);
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
</script>

<div class="w-fit min-w-80" in:scale>
  <Card class="border border-slate-600 flex ">
    <Checkbox bind:checked={iscompleted} on:change={isChanged}>
      <Text type="p">{title}</Text>
    </Checkbox>
  </Card>
</div>
