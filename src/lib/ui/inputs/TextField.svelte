<script>
	export let value;
	export let placeholder = '';
	export let disabled = false;
  export let color='';
  export let width='';
  export let helperText='';
  export let variant='';
	let clazz = '';
	export { clazz as class };

	let inputRef;

	export const focus = () => {
		if (inputRef) inputRef.focus();
	};



</script>



    <div class="relative {variant} m-2">
      <input 
        bind:this={inputRef}
        bind:value
        {disabled}
        {placeholder}
        type="text"
        class="w-full textField focus:outline-0 placeholder:text-transparent relative bg-transparent pt-3 pr-2.5 pb-2.5 pl-0 text-sm rounded-none border-b-[1px] border-gray-400 z-50"/>
      <span class="text-field-highlight absolute h-3/5 top-1/4 left-0 pointer-events-none opacity-5"></span>
      <span class="text-field-bar relative block before:left-1/2 after:right-1/2"></span>
      <label class="text-field-label text-sm font-normal absolute left-0 top-5">{placeholder}</label>
      <label class="text-sm text-gray-400">{helperText}</label>
    </div>




<style>
.textField:focus {
border-bottom: 1px solid rgba(0,0,0,0);
}
.text-field-label {
color: rgba(0,0,0, 0.54);
transition: 0.2s ease all;
}
.textField:focus ~ .text-field-label {
color: #3f51b5;
top: -10px;
position: absolute ;
font-size: 12px;
}
input:not(:placeholder-shown) ~ .text-field-label {
top: -10px;
font-size: 12px;
}
.text-field-bar:before, .text-field-bar:after {
content: '';
height: 2px;
width: 0;
bottom: 1px;
position: absolute;
background: #3f51b5;
transition: 0.2s ease all;
}
.textField:focus ~ .text-field-bar:before, .textField:focus ~ .text-field-bar:after {
width: 50%;
}
</style>