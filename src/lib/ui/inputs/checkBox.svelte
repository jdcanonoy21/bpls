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


<label class="fui-checkbox">
        <input 
        bind:value
        type="checkbox"
        data-indeterminate="false"
        {disabled}
        {name}
        {label}
        {checked}
        class="{color} mx-4"
        />
    <span>{label}</span>
</label>

<style>
.fui-checkbox {
    z-index: 0;
    position: relative;
    display: block;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    font-size: 16px;
    line-height: 1.5;
    margin: 10px;
}

/* Input */
.fui-checkbox > input {
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
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.fui-checkbox > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
}

/* Box */
.fui-checkbox > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
}

/* Checkmark */
.fui-checkbox > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 2px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
}

/* Checked, Indeterminate */
.fui-checkbox > input:checked,
.fui-checkbox > input:indeterminate {
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.fui-checkbox > input:checked + span::before,
.fui-checkbox > input:indeterminate + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.fui-checkbox > input:checked + span::after,
.fui-checkbox > input:indeterminate + span::after {
    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
}

.fui-checkbox > input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
}

/* Hover, Focus */
.fui-checkbox:hover > input {
    opacity: 0.04;
}

.fui-checkbox > input:focus {
    opacity: 0;
}

.fui-checkbox:hover > input:focus {
    opacity: 0.16;
}

/* Active */
.fui-checkbox > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
}

.fui-checkbox > input:active + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.fui-checkbox > input:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
}

/* Disabled */
.fui-checkbox > input:disabled {
    opacity: 0;
}

.fui-checkbox > input:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    cursor: initial;
}

.fui-checkbox > input:disabled + span::before {
    border-color: currentColor;
}

.fui-checkbox > input:checked:disabled + span::before,
.fui-checkbox > input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
}

  </style>