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


{#if mode === 'uno'}
<Container>
	<Paper>
		<Title title="Applicant" />
		<SubTitle subtitle="Enter Applicantion Info (Corporation)" />
		<Textfield placeholder="Name of Company"/>
		<div class="pt-2">
			<p class="font-bold">Administrator</p>
			<Textfield placeholder="Last Name" />
			<Textfield placeholder="First Name" />
			<Textfield placeholder="Middle Name" />
			<Textfield placeholder="Email" />
			<Textfield placeholder="Mobile No." />
			<Textfield placeholder="Address" />
		</div>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='dose'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}


{#if mode === 'dose'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<p>Is this place of business rented?</p>
		<Radio name="app" label="Yes" />
		<Radio name="app" label="No" />
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='tres'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'tres'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<p>Is this place of business located in the LGU operated market or rental space?</p>
		<Radio name="app" label="Yes" />
		<Radio name="app" label="No" />
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='kwatro'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'kwatro'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<Textfield placeholder="Enter stall/unit No." />
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='singco'} caption="Proceed" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}


{#if mode === 'singco'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<Textfield placeholder="Enter stall/unit No." />
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='sais'} caption="Proceed" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'sais'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<p>Please confirm if information is correct</p>
        <br />
        <p>Stall No: U12312</p>
        <p>Acct Holder: Nazareno, Elmo</p>
        <p>Market Center: PREMIUM MARKET</p>
        <p>Cluster: MEAT SECTION</p>
        <p>Monthly Rent: 100/day</p>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='syete'} caption="Proceed" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'syete'}
<Container>
	<Paper>
		<Title title="Business Address" />
		<p>Please confirm if information is correct</p>
        <br />
        <TextField placeholder="Select the place of business from list of register lessons"/>
		<div>
			<Button on:click={()=> mode='sais'} caption="Proceed" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}
