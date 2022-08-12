<script>
    export let tests=[
        {rows:[
            {one:'one'},
            {two:'two'}
        ]}
    ];

    let rows={};
    let col;
  
</script>

<div class="m-10">
    <div class="tbl-header">
        <table>
        <thead>
            <tr>
            <th><input type="checkbox"/></th>
            <th>Company</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
            </tr>
        </thead>
        </table>
    </div>
    <div class="tbl-content">
        <table>
            <tbody>
                {#each tests as test}
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>{test.rows}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>

</div>

<style>
    
h1{
  font-size: 30px;
  color: #000;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  border-bottom: solid 1px #cfcfcf
}

tbody > tr:hover{
    background-color: rgb(0 0 0 / 4%);
}
tbody > tr > td:first-child{
    width: 20px;
}
thead > tr > th:first-child{
    border-top-left-radius: 10px;
    width: 20px;
}
thead > tr > th:last-child{
    border-top-right-radius: 10px;
}

</style>