<script>
	import Page from '$lib/components/page.svelte';
	import Radio from '$lib/ui/inputs/radio.svelte';
	import Button from '$lib/ui/inputs/button.svelte';
	import Textfield from '$lib/ui/inputs/textField.svelte';
	import CheckBox from '$lib/ui/inputs/checkBox.svelte';
	import Select from '$lib/ui/inputs/select.svelte';
	import MenuItem from '$lib/ui/inputs/menuItem.svelte';
	import ActionBar from '$lib/ui/actionBar.svelte';

	let mode ='uno';	
	let radioValue = 'uno';
	let applicant='';
	let corpo;
	let indi;
	let addOption='';
	let selectAdd;
	
	const tracking="WX-923123231"

	const onNext = () => {
		mode = radioValue;
	};


</script>



{#if mode === 'uno'}
<Page title="Applicant" subtitle="Enter Applicantion Info" {tracking}>
	<Select placeholder="Type of Applicant" width="full" >
		<MenuItem value="2" label="Individual"/>
		<MenuItem value="3" label="Corporation"/>
		<MenuItem value="3" label="Others"/>
	</Select>

	{#if  applicant === indi}
	<div>
		<Textfield placeholder="Last Name" />
		<Textfield placeholder="First Name" />
		<Textfield placeholder="Middle Name" />
		<Textfield placeholder="Email" />
		<Textfield placeholder="Mobile No." />
	</div>
	{/if}
	{#if  applicant === corpo}
	<Textfield placeholder="Name"/>
	<p class="font-bold px-2">Administrator</p>
	<div>
		<Textfield placeholder="Last Name" />
		<Textfield placeholder="First Name" />
		<Textfield placeholder="Middle Name" />
		<Textfield placeholder="Email" />
		<Textfield placeholder="Mobile No." />>
	</div>
	{/if}
	{#if  addOption === selectAdd}
	<p class="font-bold px-2">Address</p>
	<div class="flex">
		<Radio label="Resident" value="resident" />
		<Radio label="Non-Resident" value="nonresident" />
	</div>
	{/if}
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='dose'} caption="Submit" variant="contained" color="primary"/>
	</div>
	
</Page>
{/if}


{#if mode === 'dose'}
<Page title="Business Address" note="Is this place of business rented?" {tracking}>
	<Radio name="app" label="Yes" value="yes1" bind:selected={radioValue}/>
	<Radio name="app" label="No" value="no1" bind:selected={radioValue}/>
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='uno'} caption="Back" variant="text"/>
		<Button on:click={onNext} caption="Submit" variant="contained" color="primary"/>
	</ActionBar>
</Page>
{/if}

{#if mode === 'yes1'}
<Page title="Business Address" {tracking} note="Is this place of business located in the LGU operated market or rental space?">
	<Radio name="app" label="Yes" value="yes2" bind:selected={radioValue}/>
	<Radio name="app" label="No" value="no2" bind:selected={radioValue}/>
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='dose'} caption="Back" variant="text"/>
		<Button on:click={onNext} caption="Submit" variant="contained" color="primary"/>
	</ActionBar>
</Page>
{/if}

{#if mode === 'yes2'}
<Page title="Business Address" {tracking}>
	<Textfield placeholder="Enter stall/unit No." />
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='yes1'} caption="Back" variant="text"/>
		<Button on:click={()=> mode='tres'} caption="Proceed" variant="contained" color="primary"/>
	</ActionBar>
</Page>
{/if}


{#if mode === 'tres'}
<Page title="Business Address" note="Please confirm if information is correct" {tracking}>
        <p>Stall No: U12312</p>
        <p>Acct Holder: Nazareno, Elmo</p>
        <p>Market Center: PREMIUM MARKET</p>
        <p>Cluster: MEAT SECTION</p>
        <p>Monthly Rent: 100/day</p>
		<hr class="mt-10 mb-5 "/>
		<div>
			<Button on:click={()=> mode='kwatro'} caption="Proceed" variant="contained" color="primary"/>
		</div>
	</Page>
{/if}

{#if mode === 'no2'}
<Page title="Business Address" link="reg" {tracking}>
	<Textfield placeholder="Select the place of business from registered lessors"/>
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='nueve'} caption="Proceed" variant="contained" color="primary"/>
	</div>
	<div class="pt-4">
		<p>Address not found on the list?<Button caption="Click here" on:click={()=> mode='reg'} color=primary/></p>
	</div>
</Page>
{/if}

{#if mode === 'nueve'}
<Page title="Business Address" note="Please confirm if information is correct and specify other details" {tracking}>
	<p>Lessor : Nazareno, Elmo</p>
	<p>Address : SM City Cebu North Reclamation Area, Cebu City</p>
	<Textfield placeholder="Unit No"/>
	<Textfield placeholder="Monthly Rent"/>
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='lob'} caption="Submit" variant="contained" color="primary"/>
	</div>
</Page>
{/if}

{#if mode === 'reg'}
<Page title="Business Address" subtitle="Enter Business Address" note="Enter the lessons information and business Address" {tracking}>
	<Textfield placeholder="Lessor Name"/>
	<Textfield placeholder="Monthly Rent"/>
	<Textfield placeholder="Unit No. Bldg No."/>
	<Textfield placeholder="Street, Subdivision, barangay"/>
	<p class="mt-10 px-2">Select location in map</p>
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='lob'} caption="Submit" variant="contained" color="primary"/>
	</div>
</Page>
{/if}


{#if mode === 'no1'}
<Page title="Business Address" subtitle="Enter Business Addresss" {tracking}>
	<Textfield placeholder="Enter PIN pr latest tax declaration no. of property"/>
	<Textfield placeholder="Unit No. Bldg No."/>
	<Textfield placeholder="Street, Subdivision, barangay"/>
	<p class="mt-10 px-2">Select location in map</p>
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='lob'} caption="Submit" variant="contained" color="primary"/>
	</div>
</Page>
{/if}

{#if mode === 'lob'}
<Page title="Line of Business" subtitle="Specify line(s) of Business" {tracking}>
	<Textfield placeholder="Primary Business"/>
	<Button caption="Advance Search" color="primary" variant="contained" class="float-right"/>
	<p class="mt-10 px-2">Other Business Activities</p>
	<Button caption="Add More Business" variant="text"/>
	<hr class="mt-10 mb-5 "/>
	<div>
		<Button on:click={()=> mode='binfo1'} caption="Submit" variant="contained" color="primary"/>
	</div>
</Page>
{/if}

{#if mode === 'binfo1'}
<Page title="Business Information" subtitle="Specify Business Information" {tracking}>
	<Radio name="app" label="Do you have delivery vans?" value="" bind:selected={radioValue}/>
	<Radio name="app" label="NStore/office located inside centro ?" value="" bind:selected={radioValue}/>
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='lob'} caption="Back" variant="text"/>
		<Button on:click={()=> mode='binfo2'} caption="Submit" variant="contained" color="primary"/>
	</ActionBar>
</Page>
{/if}

{#if mode === 'binfo2'}
<Page title="Business Information" subtitle="Specify Business Information" {tracking}>
	<Radio name="app" label="Do you have delivery vans?" value="" bind:selected={radioValue}/>
	<Radio name="app" label="NStore/office located inside centro ?" value="" bind:selected={radioValue}/>
	<hr class="mt-10 mb-5 "/>
	<ActionBar>
		<Button on:click={()=> mode='dose'} caption="Back" variant="text"/>
		<Button on:click={onNext} caption="Submit" variant="contained" color="primary"/>
	</ActionBar>
</Page>
{/if}
