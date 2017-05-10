function tabContentDetails(tabOption) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
	if(tabOption=='trending')
		{
			tabContentDisplay('trending');


		}
		
	else if(tabOption=='entertainment')
		{
			tabContentDisplay('entertainment');

		}
		else if(tabOption=='travel')
		{
			tabContentDisplay('travel');

		}
		else if(tabOption=='food')
		{

			tabContentDisplay('food');
		}

    document.getElementById(tabOption).style.display = "block";  
}

var make_button_active = function()
{
  //Get item siblings
  var siblings =($(this).siblings());

  //Remove active class on all buttons
  siblings.each(function (index)
    {
      $(this).removeClass('active');
    }
  )


  //Add the clicked button class
  $(this).addClass('active');
}
$(document).ready(
  function()
  {
    $(".tab-container li").click(make_button_active);
  }  
)



var json = {
	
		"data" : [
				{
				"title" : "Golf",
				"price" : "17",
				"url"	: "assests/image/img1.jpg",
				"uid" :   "gf",
				"add":"Add to cart",
				"meta" :   "travel, entertainment"
				
				},

				{
				"title" : "Cooking",
				"price" : "15",
				"url"	: "assests/image/img2.jpg",
				"uid" :   "cg",
				"add":"Add to cart",
				"meta" :   "trending,food"
				
				},

				{
				"title" : "Entertainment",
				"price" : "16",
				"url"	: "assests/image/img3.jpg",
				"uid" :   "ent",
				"add":"Add to cart",
				"meta" :   "trending,entertainment"
				
				},

				{
				"title" : "Health",
				"price" : "13",
				"url"	:"assests/image/img4.jpg",
				"uid" :   "ht",
				"add":"Add to cart",
				"meta" :   "travel,food"
				},

				{
				"title" : "People",
				"price" : "12",
				"url"	: "assests/image/img5.jpg",
				"uid" :   "pl",
				"add":"Add to cart",
				"meta" :   "travel,entertainment"
				
				},

				{
				"title" : "Sunset",
				"price" : "18",
				"url"	: "assests/image/ck.jpg",
				"uid" :   "st",
				"add":"Add to cart",
				"meta" :   "trending,travel"
				},
				{
				"title" : "Sunset",
				"price" : "20",
				"url"	: "assests/image/gf.jpg",
				"uid" :   "st",
				"add":"Add to cart",
				"meta" :   "trending,entertainment"
			    
				}

				]
			};

function tabContentDisplay(tabid)
{

		Length = json.data.length;
      for(var i =0; i<Length; i++)
            {
           	var metaegory = json.data[i].meta;
           	var c = metaegory.split(',');
          
           	if(tabid == c[0] || tabid == c[1])
           	{
	   	var outerCol=document.createElement("div");
	outerCol.className='col-md-3 col-sm-4 col-xs-12 item-card';
	document.getElementsByClassName(tabid)[0].appendChild(outerCol);
	var cardDiv=document.createElement("div");
	cardDiv.className='card';
	cardDiv.id='item'+i;
	outerCol.appendChild(cardDiv);
	var image=document.createElement("img");
	image.setAttribute("src", json.data[i].url);
	cardDiv.appendChild(image);
	var titleDiv=document.createElement("div");
	titleDiv.className='product-name';
	cardDiv.appendChild(titleDiv);
	var title=document.createElement("p");
	   title.innerHTML = json.data[i].title;
	   titleDiv.appendChild(title);
	var priceDiv=document.createElement("div");
	priceDiv.className='product-details';
	cardDiv.appendChild(priceDiv);
	var price=document.createElement("p");
	   price.innerHTML = json.data[i].price;
	   priceDiv.appendChild(price);
	var cartDiv=document.createElement("div");
	cartDiv.className='add-option';
	cardDiv.appendChild(cartDiv);
	
	var add=document.createElement("p");
	   add.innerHTML = json.data[i].add;
	   cartDiv.appendChild(add);
	   cardDiv.onclick= function(){AddToCart(this.id);};
	

  
}
	   
         }

	}



var sum= new Array();
var totalsum=0,count=0;
var j=0,c;
var k=0;
var totalNo=0;
function AddToCart(outecardId){
	document.getElementById("empty-cart").style.display="none";
	document.getElementById("nonempty-cart").style.display="block";
	
		if(sessionStorage.getItem("count") == null || sessionStorage.getItem("count") == "undefined" || sessionStorage.getItem("count")==0)
		{
			sessionStorage.setItem("count", 0);	
		 	count=0;
		 	console.log(count);
		}

count = parseInt(sessionStorage.getItem("count")) + 1;
sessionStorage.setItem("count", count);
console.log("count " + sessionStorage.getItem("count"));

if(sessionStorage.getItem("index") == null)
		{
			sessionStorage.setItem("index", 0);	
			index = sessionStorage.getItem("index");
		 	console.log(index);
		}
		index = sessionStorage.getItem("index");
		console.log(index);
        c=index;
 
	
    totalNo=totalNo+1; 
	document.getElementById("totalItems").style.display="inline-block";
	document.getElementById("totalItems").innerHTML = totalNo;
	

	var outerDiv=document.getElementById(outecardId);
	
	var imageIcon=outerDiv.getElementsByTagName("img")[0].src;
	
	var title=outerDiv.getElementsByClassName("product-name")[0].getElementsByTagName("p")[0].innerHTML;
	
	var price=outerDiv.getElementsByClassName("product-details")[0].getElementsByTagName("p")[0].innerHTML;
	
	var displayItems=document.getElementById("myModal").getElementsByClassName("modal-dialog")[0].getElementsByClassName("modal-content")[0].getElementsByClassName("modal-body")[0];

	var listItems=displayItems.getElementsByClassName("ItemsList")[0];
	
	var list=document.createElement("li");
	list.className="list-item";
	list.id="list"+j;
	listItems.appendChild(list);
	var img=document.createElement("img");
	img.className="selectedOptionIcon";
	sessionStorage.setItem("url"+index,imageIcon );
	img.setAttribute("src",sessionStorage.getItem("url"+index));
	list.appendChild(img);
	var p=document.createElement("p");
	p.className="selectedItemTitle";
	sessionStorage.setItem("title"+index, title);
	p.innerHTML=sessionStorage.getItem("title"+index);;
	list.appendChild(p);
    var input=document.createElement("input");
	input.className="quantityNo";
	input.id="qty"+j;
	j=j+1;
	input.setAttribute("type","number");
	  input.setAttribute("min","1");
	  input.setAttribute("max","10");
	  input.setAttribute("value","1");
      list.appendChild(input);
	var cost=document.createElement("p");
	cost.className="costOfItem";
	var totalItemCost;
	list.appendChild(cost);
	var cancel=document.createElement("button");
	cancel.id=j;
	cancel.innerHTML="Cancel";
	cancel.onclick=function(){
		removeElement(list.id,this.id);
	}
	list.appendChild(cancel);
	input.onclick=function(){
	 var qty=document.getElementById(input.id).value;
	 var totalCost=qty*price;
	 sessionStorage.setItem("cost"+input.id, totalCost);
	 console.log("index " + sessionStorage.getItem("index") + " " + sessionStorage.getItem("cost"+input.id));
	totalItemCost="$ "+totalCost;

	totalsum=totalsum+totalCost;
	 sessionStorage.setItem("totalcost"+index,totalsum);
	k++;
	cost.innerHTML= sessionStorage.getItem("cost"+input.id);
	var footer=document.getElementsByClassName("totalAmount")[0];
	footer.innerHTML=" $ "+sessionStorage.getItem("totalcost"+index);
	console.log(sessionStorage.getItem("totalcost"+index));

	}
	c++;
	sessionStorage.setItem("index", c);

}
function pageRefresh(){
	document.getElementById("empty-cart").style.display="none";
	document.getElementById("nonempty-cart").style.display="block";
if(sessionStorage.getItem("count") == null || sessionStorage.getItem("count") == "undefined" || sessionStorage.getItem("count")==0 )
		{
			sessionStorage.setItem("count", 0);	
		 	count=0;
		 	console.log(count);
		}


		console.log("count " + sessionStorage.getItem("count"));


	 if(sessionStorage.getItem("index") == "undefined" || sessionStorage.getItem("index") == null )
		{
			sessionStorage.setItem("index", 0);	
			index = sessionStorage.getItem("index");
		 	console.log(index);
		}

		

	index = sessionStorage.getItem("index");
		 console.log(index);
		 	for(var m = 0,n=0; m<sessionStorage.getItem("count"); m++,n++)
	{
 if(sessionStorage.getItem("url"+n)!==null||sessionStorage.getItem("title"+n)==null||sessionStorage.getItem("cost"+n)==null){
    totalNo=totalNo+1; 
	document.getElementById("totalItems").style.display="inline-block";
	document.getElementById("totalItems").innerHTML = totalNo;
	
	var displayItems=document.getElementById("myModal").getElementsByClassName("modal-dialog")[0].getElementsByClassName("modal-content")[0].getElementsByClassName("modal-body")[0];

	var listItems=displayItems.getElementsByClassName("ItemsList")[0];
	
	var list=document.createElement("li");
	list.className="list-item";
	listItems.appendChild(list);
	var img=document.createElement("img");
	img.className="selectedOptionIcon";

	img.setAttribute("src",sessionStorage.getItem("url"+n));
	list.appendChild(img);
	var p=document.createElement("p");
	p.className="selectedItemTitle";
	
	p.innerHTML=sessionStorage.getItem("title"+n);
	list.appendChild(p);
    var input=document.createElement("input");
	input.className="quantityNo";
	input.id="qty"+j;
	j=j+1;
	input.setAttribute("type","number");
	  input.setAttribute("min","1");
	  input.setAttribute("max","10");
	  input.setAttribute("value","1");
      list.appendChild(input);
	var cost=document.createElement("p");
	cost.className="costOfItem";
	var totalItemCost;
	list.appendChild(cost);
		var cancel=document.createElement("button");
	cancel.id="cancel"+j;
	cancel.innerHTML="Cancel";
	cancel.onclick=function(){
		alert("in cancel");
		removeElement(list.id,this.id);
	}
    list.appendChild(cancel);
	console.log(sessionStorage.getItem("cost"+n));
	cost.innerHTML= sessionStorage.getItem("costqty"+n);
	var footer=document.getElementsByClassName("totalAmount")[0];
	footer.innerHTML=" $ "+sessionStorage.getItem("totalcost"+n);
	
	
	}
}
}
pageRefresh();


function removeElement(elementId,ind) {
	console.log(ind);
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
	sessionStorage.removeItem("url"+ind);
	sessionStorage.removeItem("title"+ind);
	sessionStorage.removeItem("cost"+ind);
	totalNo=totalNo-1;
	
	var c= parseInt(sessionStorage.getItem("count"))-1;
	sessionStorage.setItem("count", c);
	document.getElementById("totalItems").style.display="inline-block";
	document.getElementById("totalItems").innerHTML = totalNo;
}