var colorsarray = ["rgb(93, 196, 61)","rgb(125, 217, 247)","rgb(252, 156, 252)","rgb(238, 101, 205)","rgb(247, 222, 95)","rgb(102,255,255)","rgb(255,0,0)","rgb(0,0,255)","rgb(51,102,0)"];
var g_selected1, g_selected2,bufferCell;
  
var board = document.getElementById("Board");
var buffer = document.getElementById("buffer");


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




for( var j=1;j<=4;j++)

{
	var rand2 = Math.floor(Math.random()*colorsarray.length);  
    bufferCell = document.createElement("div");
    bufferCell.style.backgroundColor = colorsarray[rand2];
    bufferCell.id = j;
    bufferCell.innerHTML = "<strong>"+ j +"</strong>";
    buffer.appendChild(bufferCell);
	
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
	
	checkIfClub(g_selected2.id);
	g_selected1 = undefined;
    g_selected2 = undefined;
    
    
}

function checkIfClub(block5)
{
	var upperleft, upper, upperright, left, right, bottomleft, bottom, bottomright;
	
	
	
  var  block2=document.getElementById(block5.id-8);
  var  block1=document.getElementById(block2.id-1);
  
  var  block3=document.getElementById(block2.id+1);
  var  block4=document.getElementById(block5.id-1);
  var  block6=document.getElementById(block5.id+1);
  var  block8=document.getElementById(block5.id+8);
  var  block7=document.getElementById(block8.id-1);
  var  block9=document.getElementById(block8.id+1);
    if(document.getElementById(block5.id).style.backgroundColor===document.getElementById(block2.id).style.backgroundColor)   
    {
    	 if(document.getElementById(block2.id).style.backgroundColor===document.getElementById(block3.id).style.backgroundColor && document.getElementById(block2.id).style.backgroundColor===document.getElementById(block6.id).style.backgroundColor)
    	   clubThem(block2,block3,block5,block6);
    	 else if (document.getElementById(block2.id).style.backgroundColor===document.getElementById(block1.id).style.backgroundColor && document.getElementById(block2.id).style.backgroundColor===document.getElementById(block4.id).style.backgroundColor)
    	   clubThem(block1,block2,block4,block5);
    	 else
    	 {
    	 	block1=undefined;
    	 	block2=undefined;
    	 	block3=undefined;
    	 }
    }
    
    
    
    if(document.getElementById(block5.id).style.backgroundColor===document.getElementById(block8.id).style.backgroundColor)   
    {
    	 if(document.getElementById(block8.id).style.backgroundColor===document.getElementById(block4.id).style.backgroundColor && document.getElementById(block8.id).style.backgroundColor===document.getElementById(block7.id).style.backgroundColor)
    	   clubThem(block4,block5,block7,block8);
    	 else if (document.getElementById(block8.id).style.backgroundColor===document.getElementById(block6.id).style.backgroundColor && document.getElementById(block8.id).style.backgroundColor===document.getElementById(block9.id).style.backgroundColor)
    	   clubThem(block5,block6,block8,block9);
    	 else
    	 {
    	 	block4=undefined;
    	 	block5=undefined;
    	 	block6=undefined;
    	 	block7=undefined;
    	 	block8=undefined;
    	 	block9=undefined;
    	 }
    }
    //then give user a visual perception that things are clubbingclubthem(g_selected1, g_selected2)
}



function clubthem(cell1, cell2,cell3,cell4)
{
	
	document.getElementById(cell4.id).style.backgroundColor=document.getElementById(bufferCell.id).style.backgroundColor;
	bufferCell.id--;
	document.getElementById(cell3.id).style.backgroundColor=document.getElementById(bufferCell.id).style.backgroundColor;
	bufferCell.id--;
	document.getElementById(cell2.id).style.backgroundColor=document.getElementById(bufferCell.id).style.backgroundColor;
	bufferCell.id--;
	document.getElementById(cell1.id).style.backgroundColor=document.getElementById(bufferCell.id).style.backgroundColor;
	
	
	createBuffer(bufferCell);
	//find all boxes near these two cells with same colors as these cells and replace them with items from buffer
	
	}
	
	
	function createBuffer(bufferCell)
	{
		
		for(var k=1;k<=4;k++)
		{
			var rand2 = Math.floor(Math.random()*colorsarray.length); 
			document.getElementById(bufferCell.id).style.backgroundColor=colorsarray[rand2];
			bufferCell.id++;
		}
	}




