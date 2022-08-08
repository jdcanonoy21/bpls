<script>
	export let caption;
	export let href = null;
	export let alt = '';
	export let leftIcon = null;
	export let rightIcon = null;
	export let processing = false;
	export let disabled = false;
	export let variant = '';
	export let color = '';
	let clz = '';
	export { clz as class };

	const defualtClass =
		'py-4 px-10 m-2 font-semibold text-sm text-center opacity-90 hover:opacity-100 relative border-0';

	$: processingClass = processing ? 'bg-gray-400' : '';
	$: disabledClass = disabled ? 'text-gray-500' : '';
</script>

{#if href}
	<a
		{href}
		{alt}
		class="
			{defualtClass}
			{disabledClass}
			{processingClass}
			{clz}
			{variant}{color}
			textField
		"
	>
		{#if leftIcon}
			<img src={leftIcon} alt="menu" class="h-8 mr-2" />
		{/if}
		{#if caption}
			{caption}
		{/if}
		{#if rightIcon}
			<img src={rightIcon} alt="menu" class="rotate-180 h-8 ml-2" />
		{/if}
	</a>
{:else}
	<button
		on:click
		disabled={processing || disabled}
		{alt}
		class="
		{defualtClass}
		{disabledClass}
		{processingClass}
		{clz}
		{variant}{color}
		textField
	"
	>
		{#if leftIcon && !processing}
			<img src={leftIcon} alt="menu" class="h-8 mr-2" />
		{/if}
		{#if caption}
			{caption}
		{/if}
		{#if rightIcon && !processing}
			<img src={rightIcon} alt="menu" class="h-8 ml-2" />
		{/if}
		{#if processing}
			<div class="ml-6">
				<Spinner />
			</div>
		{/if}
	</button>
{/if}




<style>
.textField {
    padding: 6px 12px 6px 12px;
    outline: none;
    cursor: pointer;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    letter-spacing: 0.00938em;
}

.textField::-moz-focus-inner {
    border: none;
}

/* Overlay */
.textField::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transition: opacity 0.2s;
}

/* Ripple */
.textField::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
}

/* Active */
.textField:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
}


/*------ BUTTONS ---*/
.contained{
    @apply bg-gray-300 rounded;
 }
 .containedprimary{
    @apply text-white  bg-blue-800 rounded;
 }
 .containedsecondary{
    @apply text-white bg-red-600 rounded;
 }
 .default{
    @apply text-black;
 }
 .primary{
    @apply text-blue-800;
 }
 .secondary{
    @apply text-red-600 accent-red-600;
 }
 .success{
   @apply text-green-600 accent-green-600;
}
 .outlined{
    @apply border-2 rounded-lg;
 }
 .outlinedprimary{
    @apply border-2 text-blue-600 border-blue-600 rounded-lg;
 }
 .outlinedsecondary{
    @apply border-2 text-red-600 border-red-600 rounded-lg;
 }

 .text{
	@apply text-blue-700;
 }

</style>