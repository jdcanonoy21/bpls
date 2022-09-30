<script>
	import TextField from "$lib/ui/inputs/TextField.svelte";
	import Container from "$lib/ui/Container.svelte";
	import Paper from "$lib/ui/Paper.svelte";
	import Button from "$lib/ui/inputs/Button.svelte";
	import Radio from "$lib/ui/inputs/Radio.svelte";
	import Select from "$lib/ui/inputs/Select.svelte";
	import MenuItem from "$lib/ui/inputs/MenuItem.svelte";
	import CheckBox from "$lib/ui/inputs/CheckBox.svelte";
	import Stepper from "$lib/stepper.svelte";
	import Table from "$lib/table.svelte";
	import TableData from "$lib/tableData.svelte";
	import TableHead from "$lib/tableHead.svelte";
	import TableRow	from "$lib/tableRow.svelte";
	import TableCell from "$lib/tableCell.svelte";
	import TableHeaderCell from "$lib/tableHeaderCell.svelte";
	import TableBody from "$lib/tableBody.svelte";
	import LinearProgress from "$lib/ui/linear.svelte";
	import SearchBar from "$lib/ui/inputs/searchBar.svelte";
	import CircularProgress from "$lib/ui/circular.svelte";
	import Map from "$lib/map.svelte";

	const items = [
		{code:'1234', company:'rameses', price:1234},
		{code:'1234', company:'rameses1', price:1234},
		{code:'1234', company:'ramese2', price:1234}

	];



</script>

<div>
	<div >
		<a href="/bpls" alt="bpls">
			<p class="pt-44 text-sm text-center">New Business Application</p>
		</a>		
	</div>
	<br /><br />
<Container>
	<Paper>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Contained Buttons</h1>
		<div class="flex mb-8">
			<Button caption="Default" variant="contained" />
			<Button caption="Primary" variant="contained" color="primary" />
			<Button caption="Secondary" variant="contained" color="secondary" />
			<Button caption="Disabled" variant="contained" disabled />
		</div>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Text Buttons</h1>
		<div class="flex mb-8 pl-4 pb-4">
			<Button caption="Default" color="default" />
			<Button caption="Primary" color="primary" />
			<Button caption="Secondary" color="secondary" />
			<Button caption="Disabled" disabled />
		</div>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Outline Buttons</h1>
		<div class="flex mb-8 pl-4 pb-4">
			<Button caption="Default" variant="outlined" />
			<Button caption="Primary" variant="outlined" color="primary" />
			<Button caption="Secondary" variant="outlined" color="secondary" />
			<Button caption="Disabled" variant="outlined" disabled />
		</div>
	</Paper>
	<Paper>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">TextField</h1>
		<div class="mb-8 pl-4 pb-4">
			<TextField placeholder="Standard" variant="standard"/>
			<TextField placeholder="Standard" variant="standard" helperText="Some important text"/>
		</div>
	</Paper>
	<Paper>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Basic Radio</h1>
		<div class="mb-8 pl-4 pb-4">
			<div class="flex mb-9">
				<Radio name="app" checked/>
				<Radio name="app" />
				<Radio disabled checked/>
				<Radio disabled/>
			</div>
		</div>
	</Paper>
	<Paper>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Basic Checkbox</h1>
		<div class="mb-8 pl-4 pb-4">
			<div class="flex mb-9">
				<CheckBox checked/>
				<CheckBox />
				<CheckBox disabled/>
				<CheckBox disabled checked/>
			</div>
		</div>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Color Checkbox</h1>
		<div class="mb-8 pl-4 pb-4">
			<div class="flex mb-9">
				<CheckBox label="Primary" checked color="primary"/>
				<CheckBox label="Secondary" checked color="secondary"/>
				<CheckBox label="Success" checked color="success"/>
			</div>
		</div>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Size Checkbox</h1>
		<div class="mb-8 pl-4 pb-4">
			<div class="flex mb-9">
				<CheckBox checked/>
				<CheckBox />
				<CheckBox disabled/>
				<CheckBox disabled checked/>
			</div>
		</div>
	</Paper>
	<Paper>
		<h1 class="mb-6 border-b-2 text-2xl pl-4">Select</h1>
		<div class="mb-8 pl-4 pb-4">
			<Select placeholder="Select Standard" width="full">
				<MenuItem value="2" label="Option 1"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="2" label="Option 1"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="2" label="Option 1"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="2" label="Option 1"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="select-label absolute text-lg pointer-events-none left-0 top-2.5"/>
				<MenuItem value="3" label="Option 5"/>
			</Select>
		</div>
	</Paper>
	<Paper>
		<Stepper />
	</Paper>
<Paper>
	<Table multiSelect={true}>
		<TableHead>
			<TableHeaderCell caption="Code" />
			<TableHeaderCell caption="Company" />
			<TableHeaderCell caption="Price" />
		</TableHead>
		<TableBody>
		{#each items as item}
			<TableRow>
				<TableCell value={item.code} />
				<TableCell value={item.company} />
				<TableCell value={item.price} />
			</TableRow>
		{/each}
		</TableBody>
	</Table>
</Paper>

<Paper>
	<LinearProgress />
</Paper>

<Paper>
	<CircularProgress />
</Paper>

<Paper>
	<SearchBar />
</Paper>

<Paper>
	<Map />
</Paper>

	

	
	

</Container>
</div>

