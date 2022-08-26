<script>
  export let placeholder = "";
  export let value;
  export let selected = "";
  export let disabled = false;
  export let color = "";
  export let variant = "";
  export let width = "";
  export let label;
  let clazz = "";
  export { clazz as class };
</script>

<div
  class="select mb-8 appearance-none m-2 -webkit-appearance-none relative after:absolute after:right-2.5 after:top-4 after:pointer-events-none"
>
  <select
    bind:value
    class="select-text w-full appearance-none -webkit-appearance-none relative bg-transparent pt-2.5 pb-2.5 pr-2.5 pl-0 border-0 text-lg focus:outline-0 "
    required
  >
    {#if placeholder}
      <option value="" disabled selected>{placeholder}</option>
    {/if}
    <slot />
  </select>
  <span
    class="select-highlight absolute left-0 pointer-events-none top-1/4 opacity-5 h-3/5"
  />
  <span class="select-bar relative block before:left-1/2 after:right-1/2" />
  <label
    class="select-label absolute text-lg pointer-events-none left-0 top-2.5"
    >{placeholder}</label
  >
</div>

<style>
  .select-text {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .select-text:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
  .select:after {
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
  }
  .select-label {
    color: rgba(0, 0, 0, 0.54);
    transition: 0.2s ease all;
  }
  .select-text:focus ~ .select-label {
    color: #2f80ed;
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
  }
  .select-text:valid ~ .select-label {
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
  }
  .select-bar:before,
  .select-bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #2f80ed;
    transition: 0.2s ease all;
  }
  .select-text:focus ~ .select-bar:before,
  .select-text:focus ~ .select-bar:after {
    width: 50%;
  }
</style>
