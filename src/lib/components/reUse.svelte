<script>
	import Page from '$lib/components/page.svelte';
	export let title='';	
	export let subtitle='';
	export let terms ='';
	export let text='';
	export let tracking ='';

</script>


<Page title={title} subtitle={subtitle}>
	<div class="mb-14">
		<p>{text}</p>
	</div>
	{#if terms}
	<CheckBox label="I Agree" />
	{/if}
	{#if tracking}
		<p class="text-green-600 font-bold text-2xl">{tracking}</p>
	{/if}
	<slot />
</Page>