<script>
	import Container from '$lib/ui/container.svelte';
	import Paper from '$lib/ui/paper.svelte';
    import Title from '$lib/ui/title.svelte';
	import SubTitle from '$lib/ui/subTitle.svelte';
    import Button from '$lib/ui/inputs/button.svelte';

    export let title='';
    export let subtitle='';
    export let note = '';
    export let trackingno = '';
    export let visible=true;
	let mode ='uno';	


</script>
{#if visible}
<Container>
	<Paper>
        {#if trackingno}
        <p class="float-right font-bold">Tracking No: {trackingno}</p>
        {/if}
		<Title title={title} />
		<SubTitle subtitle={subtitle} />
        {#if note}
		<p>{note}</p>
        {/if}
        <div class="pt-4">
            <slot />
        </div>
	</Paper>
</Container>
{/if}