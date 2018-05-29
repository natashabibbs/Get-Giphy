var result = document.querySelector("#result");
var button = document.querySelector("#button");
var search = document.querySelector("#text");
var form = document.querySelector("#form");

form.addEventListener("submit", function(){
  event.preventDefault();
  console.log(search.value);
  var searchInput = search.value;

  var oReq = new XMLHttpRequest();
  var url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=T3mqBaEMyAijShpuGCzdnsEO8GwmjXxR&limit=10";
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
});

function reqListener () {
    var data = JSON.parse(this.responseText);
    console.log(data.data); //make a for loop, to create a src object
    
    for (i=0;i<10;i++){
    var img = document.createElement('img');
    img.src = data.data[i].images.original.url; //make a for loop, to create a src object
    result.appendChild(img);

    }
  }
  
  
  

  //  var url = 'https://api.giphy.com/v1/gifs/search?q=trending&api_key=T3mqBaEMyAijShpuGCzdnsEO8GwmjXxR';
  // function reqListener1 () {
  //   var data = JSON.parse(this.responseText);
  //   
  // }

  // var getImages = new XMLHttpRequest();
  // getImages.addEventListener('load', reqListener1);
  // getImages.open("GET", url);
  // getImages.send();