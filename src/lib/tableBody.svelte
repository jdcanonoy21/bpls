<div class="tbl-content">
    <table>
        <tbody>
            <slot />
        </tbody>
    </table>
</div>

<style>
    table{
      width:100%;
      table-layout: fixed;
    }
    
    .tbl-content{
      overflow-x:auto;
      margin-top: 0px;
      background-color: #fff;
      border: 0px solid grey;
      border-bottom-left-radius:10px ;
      border-bottom-right-radius:10px ;
      -webkit-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    }
</style>