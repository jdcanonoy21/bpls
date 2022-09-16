<script>
  let suggestions = [
    "test",
    "tast",
    "top",
    "ter"
];


const searchInput = ".searchInput";
const input = "input";
const resultBox = ".resultBox";
const icon = ".icon";
let linkTag = "a";
let webLink;


const onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        searchInput.classList.add("active");
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchInput.classList.remove("active");
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}

</script>


<div class="container">
  <div class="searchInput">
    <input type="text" placeholder="">
    <div class="resultBox">
      tedt
      transparenttest
      test
    </div>
    <div class="icon"><i class="fas fa-search"></i></div>
  </div>
</div>

<style>



::selection{
  color: #fff;
  background: #664AFF;
}

.container{
  max-width: 450px;
  margin: 150px auto;
}

.container .searchInput{
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
}

.searchInput input{
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.searchInput.active input{
  border-radius: 5px 5px 0 0;
}

.searchInput .resultBox{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.searchInput.active .resultBox{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}

.resultBox li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}

.searchInput.active .resultBox li{
  display: block;
}
.resultBox li:hover{
  background: #efefef;
}

.searchInput .icon{
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
}
</style>