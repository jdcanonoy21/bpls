<script>
	import Page from '$lib/components/page.svelte';
	import Radio from '$lib/ui/inputs/radio.svelte';
	import Button from '$lib/ui/inputs/button.svelte';
	import Textfield from '$lib/ui/inputs/textField.svelte';
	import ActionBar from '$lib/ui/actionBar.svelte';
	import ReUse from '$lib/components/reUse.svelte';
	import CheckBox from '$lib/ui/inputs/checkBox.svelte';

	let mode ='uno';	
	let radioApplication = 'uno';
	let radioOrgType='';
	let selected;
	let orgType='';


	const org = [
		{ label: 'Single Propreitorship', value: 'single'},
		{ label: 'Corporation', value: 'corpo'},
		{ label: 'Cooperative', value: 'coop'},
	];

	const actions = [
		{ label: 'Create New Application', value: 'new'},
		{ label: 'Resume Pending Application', value: 'resume'},
	];
	

	const onNextApplication = () => {
		mode = radioApplication; 
	};
	const onNextOrgType = () => {
		orgType = radioOrgType;
		mode = '';
	};
	const onBackOrgType = () => {
		orgType = '';
		mode = 'org';
	};
	const onTracking = () => {
		mode = 'tracking';
		orgType = '';
	};	
	


</script>


	
<Page title="Apply New Business" subtitle="Select an action" visible={mode === 'uno'}>
	{#each actions as option}
		<Radio name="app" label={option.label} value={option.value} bind:selected={radioApplication}/>
	{/each}
	{#if radioApplication === 'resume'}
	<Textfield placeholder="Application Tracking No. *"/>
	{/if}
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button caption="Back" variant="text"/>
		<Button on:click={onNextApplication} caption="Next" variant="contained" color="primary"/>
	</ActionBar>
</Page>

<Page title="Apply New Business" subtitle="Contact Verification" visible={mode === 'new'} note="A validation key will be sent to your email. Please make sure your email is valid and you have access to it." >
		<Textfield placeholder="Full Name"/>
		<Textfield placeholder="Address"/>
		<Textfield placeholder="Email Address"/>
		<Textfield placeholder="Mobile No."/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button on:click={()=> mode='uno'} caption="Back" variant="text"/>
			<Button on:click={()=> mode='org'} caption="Submit" variant="contained" color="primary" float="right"/>
		</ActionBar>
	</Page>


<Page Title title="Apply New Business" subtitle="Choose org type" visible={mode === 'org'}>
	{#each org as option}
		<Radio name="app" label={option.label} value={option.value} bind:selected={radioOrgType}/>
	{/each}
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button on:click={()=> mode='new'} caption="Back" variant="text"/>
			<Button on:click={onNextOrgType} caption="Submit" variant="contained" color="primary"/>
		</ActionBar>
</Page>


{#if orgType === 'single'}
<Page title="Apply New Business" subtitle="Enter Business Name Registration"}>
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="DTI Reg No"/>
		<Textfield placeholder="Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button on:click={onBackOrgType} caption="Back" variant="text"/>
			<Button on:click={()=> orgType='terms'} caption="Submit" variant="contained" color="primary"/>
		</ActionBar>
	</Page>
{/if}


{#if orgType === 'corpo'}
<Page title="Apply New Business" subtitle="Enter Business Name Registration">
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="Description (Copy text in articles of incorporation)"/>
		<Textfield placeholder="SEC Reg No Reg No"/>
		<Textfield placeholder="Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button on:click={onBackOrgType} caption="Back" variant="text"/>
			<Button on:click={()=> orgType='terms'} caption="Submit" variant="contained" color="primary"/>
		</ActionBar>
	</Page>
{/if}

{#if orgType === 'coop'}
<Page  title="Apply New Business" subtitle="Enter Business Name Registration">
		<Textfield placeholder="Enter Business Name"/>
		<Textfield placeholder="Enter Trade Name"/>
		<Textfield placeholder="CDA  Reg No"/>
		<Textfield placeholder="Date Issued"/>
		<hr class="mt-10 mb-5 "/>
		<ActionBar>
			<Button on:click={onBackOrgType} caption="Back" variant="text"/>
			<Button on:click={()=> orgType='terms'} caption="Submit" variant="contained" color="primary"/>
		</ActionBar>
</Page>
{/if}

{#if orgType === 'terms'}
<ReUse  title="Apply New Business" subtitle="Before you proceed" text="Terms and Condition of web page.">
	<CheckBox label="I Agree" />
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={onBackOrgType} caption="Back" variant="text"/>
		<Button on:click={onTracking} caption="Submit" variant="contained" color="primary"/>
	</ActionBar>
</ReUse>
{/if}

{#if mode === 'tracking'}
<ReUse  title="Apply New Business" subtitle="Tracking No" text="Your tracking number for this application has been created. Please keep this number for reference for this application." tracking="WX-923123231">
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='org'} caption="Back" variant="text"/>
		<Button href="/bpls/app" caption="Proceed" variant="contained" color="primary"/>
	</ActionBar>
</ReUse>
{/if}
