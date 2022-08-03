

<script>
	export let value;
	export let name = '';
	export let disabled = false;
    export let checked = false;
    export let color='';
    export let label='';
	let clazz = '';
	export { clazz as class };

    $: disabledClass = disabled ? 'text-gray-500' : '';
</script>


<label class="fui-radio my-4">
    <input 
    bind:value
    type="radio"
    {disabled}
    {name}
    {label}
    {checked}
    class="{color}"
/>
    <span class="{disabledClass}">{label}</span>
</label>


<style>
    .fui-radio {
    z-index: 0;
    position: relative;
    display: block;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    font-size: 16px;
    line-height: 1.5;
}

/* Input */
.fui-radio > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.fui-radio > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
}

/* Circle */
.fui-radio > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 2px 10px 2px 0;
    border: solid 2px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    vertical-align: top;
    transition: border-color 0.2s;
}

/* Check */
.fui-radio > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transform: translate(5px, 5px) scale(0);
    transition: transform 0.2s;
}

/* Checked */
.fui-radio > input:checked {
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.fui-radio > input:checked + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.fui-radio > input:checked + span::after {
    transform: translate(5px, 5px) scale(1);
}

/* Hover, Focus */
.fui-radio:hover > input {
    opacity: 0.04;
}

.fui-radio > input:focus {
    opacity: 0;
}

.fui-radio:hover > input:focus {
    opacity: 0.16;
}

/* Active */
.fui-radio > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
}

.fui-radio > input:active + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

/* Disabled */
.fui-radio > input:disabled {
    opacity: 0;
}

.fui-radio > input:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    cursor: initial;
}

.fui-radio > input:disabled + span::before {
    border-color: currentColor;
}

.fui-radio > input:disabled + span::after {
    background-color: currentColor;
}

</style>