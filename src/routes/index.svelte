<script>
	import TextField from "$lib/ui/inputs/TextField.svelte";
	import Container from "$lib/ui/Container.svelte";
	import Paper from "$lib/ui/Paper.svelte";
	import Button from "$lib/ui/inputs/Button.svelte";
	import Radio from "$lib/ui/inputs/Radio.svelte";
	import Select from "$lib/ui/inputs/Select.svelte";
	import MenuItem from "$lib/ui/inputs/MenuItem.svelte";
	import CheckBox from "$lib/ui/inputs/CheckBox.svelte";
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
				<Radio checked/>
				<Radio />
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
				<MenuItem value="3" label="Option 2"/>
			</Select>
		</div>
	</Paper>
</Container>
</div>

