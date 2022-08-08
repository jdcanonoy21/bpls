<script>
	export let value;
	export let disabled = false;
    export let color='';
    export let variant='';
    export let label;
	let clazz = '';
	export { clazz as class };
    

</script>


<option {value} class='{variant}-label text-lg  absolute'>{label}</option>  

