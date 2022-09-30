

    <div class="bar">
      <input class="searchbar" type="text" title="Search">
      <div class="resultBox">
        <hr class="separator" />
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>

    </div>


<style>

.bar{
  margin:0 auto;
  /* width:575px; */
  border-radius:30px;
  border:1px solid #dcdcdc;
}
.bar:hover{
  box-shadow: 1px 1px 8px 1px #dcdcdc;
}
.bar:focus-within{
  box-shadow: 1px 1px 8px 1px #dcdcdc;
  outline:none;
}
.separator{
  margin-left: 25px;
  margin-right: 25px;
  padding-bottom: 10px;
}
.searchbar{
  height:50px;
  border:none;
  width:100%;
  font-size:16px;
  border-radius: 30px;
  outline: none;
  padding-left: 15px;
  background-image:url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-24.png');
  background-size: 15px 15px;
  background-color: transparent;
  background-position: 15px 20px;
  background-repeat: no-repeat;
  padding: 8px 20px 8px 40px;
}
.resultBox{
  padding-bottom: 10px;
  /* display: none; */
}
.resultBox p{
  padding: 0px 25px 0px 25px;
}
.resultBox p:hover{
  background-color: #cfcfcf;
}

</style>