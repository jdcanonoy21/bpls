<div class="tbl-header">
    <table>
        <thead>
            <slot />
        </thead>
    </table>
</div>

<style>
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


td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  border-bottom: solid 1px #cfcfcf
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
thead > tr > th:first-child{
    border-top-left-radius: 10px;
}
thead > tr > th:last-child{
    border-top-right-radius: 10px;
}

</style>