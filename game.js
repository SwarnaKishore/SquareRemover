var colorsarray = ["rgb(93, 196, 61)","rgb(252, 153, 153)","rgb(252, 121, 252)","rgb(167, 170, 247)","rgb(242, 252, 21)","rgb(102,255,255)","rgb(187, 192, 182)","rgb(255,153,51)","rgb(187, 112, 236)","rgb(232, 185, 250)"];
var g_selected1, g_selected2, bufferCell,score=0,moves=0;
  
var board = document.getElementById("board");
var buffer = document.getElementById("buffer");
var iBoardRows = 8;
//var iBufferSize = 4;

for (var i=1; i<=iBoardRows * iBoardRows; i++){
   var rand = Math.floor(Math.random()*colorsarray.length);            
   var colorCell = document.createElement("div");
   colorCell.style.backgroundColor = colorsarray[rand];
   colorCell.style.transition = 'background-color 0.5s';
  // colorCell.style.borderColor="white";
   //colorCell.onclick = "selected(this);" ;
   colorCell.id = i;
   colorCell.innerHTML = "<strong>" + i + "</strong>";
   colorCell.onclick = function (e) { Selected(this); };   
   board.appendChild(colorCell);
    
   //document.getEle;mentById("Board").appendChild(document.createElement("div")).style.backgroundColor = colorsarray[rand];    
}



/*for( var j=1;j<=iBufferSize;j++)

{
	var rand2 = Math.floor(Math.random()*colorsarray.length);  
    bufferCell = document.createElement("div");
    bufferCell.style.backgroundColor = colorsarray[rand2];
    bufferCell.id = j;
    bufferCell.innerHTML = "<strong>"+ j +"</strong>";
    buffer.appendChild(bufferCell);
	
}
*/




function Selected(cell)
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
		
   }
		
	if (g_selected1 != undefined && g_selected2!= undefined) 
		{
			if (IsValidMove(g_selected1.id, g_selected2.id))
			    {
			    	
				Swap(g_selected1, g_selected2);	
				moves=moves+1;
					if(moves==250)
					{
					document.getElementById('over').innerHTML ="<h4>Game Over. Your Score is  " + score + "</h4>"; 
					}
					else
					document.getElementById('move').innerHTML ="<h4>Moves =" + moves + "</h4>"; 
					}	
			else
			{
				document.getElementById(g_selected1.id).style.borderColor = 'white';
				document.getElementById(g_selected2.id).style.borderColor = 'white';
				g_selected1 = undefined;
	    		g_selected2 = undefined;
			}
		}
		
		
	
						
		
}




function IsValidMove(from, to)
{
	var retVal = false, center, upper, left, right, bottom;

	  to = to * 1;
	  center = from * 1;
	  upper = center - iBoardRows;
	  left = center - 1;
	  right = center + 1;
	  bottom = center + iBoardRows;
	  
	  //valid neighbours rules
	  if (center % iBoardRows === 0)
	  	right = 0;
	  if (center % iBoardRows === 1)
	  	left = 0;
	  if(center <= iBoardRows)
	  	upper = 0;
	  if (center > (iBoardRows * iBoardRows - 1))
	  	bottom = 0;
	  	
	  	if (to === upper || to === left || to === right || to === bottom)
	  		retVal = true;
	
	return retVal;	
}






function Swap()
{
	//swap the colors
	var temp=document.getElementById(g_selected1.id).style.backgroundColor;
	document.getElementById(g_selected1.id).style.backgroundColor=document.getElementById(g_selected2.id).style.backgroundColor;
	document.getElementById(g_selected2.id).style.backgroundColor=temp;
		
	//slwoly unselect them 
	document.getElementById(g_selected1.id).style.borderColor = 'white';
	document.getElementById(g_selected2.id).style.borderColor = 'white';
	
	FindMatching(g_selected2.id);
	g_selected1 = undefined;
    g_selected2 = undefined;
    
    
}

function FindMatching(center)
{
  var upperleft, upper, upperright, left, right, bottomleft, bottom, bottomright;
  
  center = center * 1;
  upper = center - iBoardRows;
  upperleft = upper - 1;
  upperright = upper + 1;
  left = center - 1;
  right = center + 1;
  bottom = center + iBoardRows;
  bottomleft = bottom - 1;
  bottomright = bottom + 1;
  
  //valid neighbours rules
  if (center % iBoardRows === 0)
  	right = upperright = bottomright = 0;
  if (center % iBoardRows === 1)
  	left = upperleft = bottomleft = 0;
  if(center <= iBoardRows)
  	upper = upperleft = upperright = 0;
  if (center > (iBoardRows*iBoardRows-iBoardRows))
  	bottom = bottomleft = bottomright = 0;
  	
  var centerColor = document.getElementById(center).style.backgroundColor;
  var isAnyMatching = false;
  var arrIDs = new Array(upperleft, upper, upperright, left, right, bottomleft, bottom, bottomright,center);
  for (var i = 0; i < arrIDs.length; i++)
  {
  	if (arrIDs[i] > 0)
  	{
  		if (document.getElementById(arrIDs[i]).style.backgroundColor !== centerColor)
  			arrIDs[i] = 0;
  		else
  			isAnyMatching = true;
  	}
  	
  }
  	
  	if( arrIDs[0] && arrIDs[1] && arrIDs[3] != 0 )
  	{
  		/*arrIDs[2]=0;
  		arrIDs[4]=0;
		arrIDs[5]=0;
		arrIDs[6]=0;
		arrIDs[7]=0;*/
  		ClubThem(arrIDs);
  		
	}
  	
  	if( arrIDs[1] && arrIDs[2] && arrIDs[4] != 0 )
  	{
  		
  		/*arrIDs[0]=0;
  		arrIDs[3]=0;
		arrIDs[5]=0;
		arrIDs[6]=0;
		arrIDs[7]=0;*/
		ClubThem(arrIDs);
  	}
  	
  	if( arrIDs[3] && arrIDs[5] && arrIDs[6] != 0 )
  	{
  		
  		/*arrIDs[0]=0;
  		arrIDs[1]=0;
		arrIDs[2]=0;
		arrIDs[4]=0;
		arrIDs[7]=0;
		ClubThem(arrIDs);*/
  	}
  	if( arrIDs[4] && arrIDs[6] && arrIDs[7] != 0 )
  	{
  		
  		/*arrIDs[0]=0;
  		arrIDs[1]=0;
		arrIDs[2]=0;
		arrIDs[3]=0;
		arrIDs[5]=0;*/
		ClubThem(arrIDs);
  	}
  	
  	
  	
  	
  	
  	
  	
  	
  		
    //then give user a visual perception that things are clubbingclubthem(g_selected1, g_selected2)
}//findMatching close



function ClubThem(arrMatchingIds)
{
	
	for(var j=0; j < arrMatchingIds.length; j++)
	 {
	 	  
	 	if (arrMatchingIds[j] === 0) continue;
		document.getElementById(arrMatchingIds[j]).style.backgroundColor='white';
	 	/*arrMatchingIds[j].style.transition = 'background-color 2s' ; */
	 	
	 }
	 setTimeout(function(){ClubToRandom(arrMatchingIds);},800);
}
	
function ClubToRandom(arrMatchingIds)
	
	{
		
		
		for (var i = 0; i < arrMatchingIds.length; i++)
	     {
		if (arrMatchingIds[i] === 0) continue;
		
		
		var rand2 = Math.floor(Math.random()*colorsarray.length);  		
		document.getElementById(arrMatchingIds[i]).style.backgroundColor=colorsarray[rand2];
		
	    }
	     
	    score=score+1;
	    document.getElementById('score1').innerHTML = "<h4>Score = " + score + "</h4>";
	   
	//createBuffer(bufferCell);
	//find all boxes near these two cells with same colors as these cells and replace them with items from buffer
}
	
	
/*function createBuffer(bufferCell)
{
	for( var j=1;j<=iBufferSize;j++)

{
	var rand2 = Math.floor(Math.random()*colorsarray.length);  
    bufferCell.style.backgroundColor = colorsarray[rand2];
    bufferCell.id++;
  
    
	
}
}*/
	
	



