var colorsarray = ["#CCCCCC","#333333","#990099","#CD5C5C"];  
for (var i=0; i< 64; i++){
   var rand = Math.floor(Math.random()*colorsarray.length);            document.getElementById("Board").appendChild(document.createElement("div")).style.backgroundColor = colorsarray[rand];    
}
