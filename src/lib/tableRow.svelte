<script>
    import {getContext} from 'svelte';
    let multiSelect=getContext('multiSelect');
    let selectAll=getContext('selectAll');
    let checked=false;
    $:{
        checked=selectAll;
    }
    console.log(checked)
</script>
<tr>
    {#if multiSelect}
    <td><input type="checkbox" bind:checked/></td>
    {/if}
    <slot />
</tr>