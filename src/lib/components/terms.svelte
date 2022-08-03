<script>
	import { onMount } from 'svelte';
	import Container from '$lib/ui/Container.svelte';
	import Paper from '$lib/ui/Paper.svelte';
	import Radio from '$lib/ui/inputs/Radio.svelte';
	import Title from '$lib/ui/Title.svelte';
	import SubTitle from '$lib/ui/SubTitle.svelte';
	import Button from '$lib/ui/inputs/Button.svelte';
	import Textfield from '$lib/ui/inputs/Textfield.svelte';
	import CheckBox from '$lib/ui/inputs/CheckBox.svelte';
	import ActionBar from '$lib/ui/ActionBar.svelte';

	let mode ='uno';	



</script>


{#if mode === 'syete'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Before you proceed" />
		<div class="mb-14">
			<p>Terms and Condition of web page</p>
		</div>
		<CheckBox label="I Agree" />
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='otso'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}