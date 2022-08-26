

<script>
  export let steps=[
    {title:'The First'},
    {title:'The Second'},
    {title:'The Third'},
    {title:'The Fourth'},
    {title:'The five'},
    {title:'The Six'},
    {title:'The seven'},
    {title:'The 8'},
    {title:'The nine'}
  ];
  export let activeStep=4;
  export let currentStep=4;
  


</script>

<ul id="progress">
  {#each steps as step, idx}
    <li><div class:divider={idx}></div></li>
    <li on:click={() => activeStep=idx+1}>
      <div 
        class="node bg-blue-600" 
        class:inactive={idx+1 > currentStep}
        class:active={idx+1 === activeStep}
        > {idx+1} </div><p>{step.title}</p>
    </li>
  {/each}
</ul>


<style>

.node {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    display:inline-block;
    transition: all 1000ms ease;
    color:#fff;
    padding: 10px 0px 0px 8px;
    font-size: 12px;
}

.activated {
    box-shadow: 0px 0px 3px 2px rgba(194, 255, 194, 0.8);
}

.divider {
    height: 40px;
    width: 1px;
    margin:5px 0px 5px 9px;
    transition: all 800ms ease;
    background-color: gray;
}

li p {
    display:inline-block;
    margin-left: 25px;
}

li {
    list-style: none;
    line-height: 1px;
}
.inactive{
  background-color: gray;
  pointer-events: none;
}
.active{
  background-color: green;
  pointer-events:inherit;
}

</style>