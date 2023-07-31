window.onload = getBold_items();
 
// 
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}

function highlight() {
    //Write your code herevar bold_Items;
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "green";
    }
}


function return_normal() {
    //Write your code here
 for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
    
}
