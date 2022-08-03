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
		<Title title="Apply New Business" />
		<SubTitle subtitle="Select an action" />
		<Radio name="app" label="Create New Application"/>
		<Radio name="app" label="Resume Pending Application"/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button caption="Cancel" variant="text"/>
			<Button on:click={()=> mode='dose'} caption="Next" variant="contained" color="primary"/>
		</ActionBar>
	</Paper>
</Container>
{/if}

{#if mode === 'dose'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Contact Verification" />
		<p>A validation key will be sent to your email. Please make sure your email is valid and you have access to it.</p>
		<Textfield placeholder="Full Name"/>
		<Textfield placeholder="Address"/>
		<Textfield placeholder="Email Address"/>
		<Textfield placeholder="Mobile No."/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button caption="Back" variant="text"/>
			<Button on:click={()=> mode='tres'} caption="Submit" variant="contained" color="primary" float="right"/>
		</ActionBar>
	</Paper>
</Container>
{/if}

{#if mode === 'tres'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Choose org type" />
		<Radio name="app" label="Single Propreitorship" value="1"/>
		<Radio name="app" label="Corporation" value="2"/>
		<Radio name="app" label="Cooperative" value="3"/>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='opt1'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'opt1'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Enter Business Name Registration" />
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="DTI Reg No"/>
		<Textfield placeholder="DTI Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button href="/bpls/app" caption="Submit" variant="contained" color="primary" />
		</div>
	</Paper>
</Container>
{/if}


{#if mode === 'opt2'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Enter Business Name Registration" />
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="Description (Copy text in articles of incorporation)"/>
		<Textfield placeholder="SEC Reg No Reg No"/>
		<Textfield placeholder="DTI Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='sais'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}

{#if mode === 'opt3'}
<Container>
	<Paper>
		<Title title="Apply New Business" />
		<SubTitle subtitle="Enter Business Name Registration" />
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="CDA  Reg No"/>
		<Textfield placeholder="DTI Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='syete'} caption="Submit" variant="contained" color="primary"/>
		</div>
	</Paper>
</Container>
{/if}


