<script>
  import { getContext, setContext } from 'svelte';
  let multiSelect = getContext('multiSelect');

  let checked = false;
$: {
  setContext('selectAll', checked);
}
</script>
<thead>
  <tr>
    {#if multiSelect}
    <th><input type="checkbox" bind:checked/></th>
    {/if}
    <slot {multiSelect} />
  </tr>
</thead>
