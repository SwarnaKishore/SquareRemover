var colorsarray = ["rgb(93, 196, 61)","rgb(125, 217, 247)","rgb(252, 156, 252)","rgb(238, 101, 205)","rgb(247, 222, 95)"];
var g_selected1, g_selected2;
  
var board = document.getElementById("Board");
for (var i=1; i<=64; i++){
   var rand = Math.floor(Math.random()*colorsarray.length);            
   var colorCell = document.createElement("div");
   colorCell.style.backgroundColor = colorsarray[rand];
  // colorCell.style.borderColor="white";
   //colorCell.onclick = "selected(this);" ;
   colorCell.id = i;
   colorCell.innerHTML = "<strong>" + i + "</strong>";
   colorCell.onclick = function (e) { selected(this); };   
   board.appendChild(colorCell);
   
   //document.getEle;mentById("Board").appendChild(document.createElement("div")).style.backgroundColor = colorsarray[rand];    
}


function selected(cell)
{
	if (g_selected1 == undefined)
	{
		g_selected1 = cell;
		document.getElementById(g_selected1.id).style.borderColor = 'black';
	}		
	else if (g_selected1 != undefined && g_selected2 == undefined)
		{
			g_selected2 = cell;
			//show user that this cell is selected
			document.getElementById(g_selected2.id).style.borderColor = 'black';
			swap(g_selected1, g_selected2);					
		}
}

function swap()
{
	//swap the colors
	var temp=document.getElementById(g_selected1.id).style.backgroundColor;
	document.getElementById(g_selected1.id).style.backgroundColor=document.getElementById(g_selected2.id).style.backgroundColor;
	document.getElementById(g_selected2.id).style.backgroundColor=temp;
	
	
	
	
	
	//slwoly unselect them 
	document.getElementById(g_selected1.id).style.borderColor = 'white';
	document.getElementById(g_selected2.id).style.borderColor = 'white';
	
	//then give user a visual perception that things are clubbing	
	clubthem(g_selected1, g_selected2);
}

function clubthem(cell1, cell2)
{
	
	//find all boxes near these two cells with same colors as these cells and replace them with items from buffer
	g_selected1 = undefined;
    g_selected2 = undefined;
}
