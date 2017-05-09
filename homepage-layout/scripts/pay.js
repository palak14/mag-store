function display(){
	var table=document.getElementsByClassName("totalItemsList")[0];
	for(i=0;i<sessionStorage.getItem("count");i++ ){
	var tr=document.createElement("tr");
	table.appendChild(tr);
	var td1=document.createElement("td");
     td1.innerHTML=	i+1;
	tr.appendChild(td1); 
	var td2=document.createElement("td");
    td2.innerHTML=	sessionStorage.getItem("title"+i);
	tr.appendChild(td2); 
	var td3=document.createElement("td");
    td3.innerHTML=	sessionStorage.getItem("cost"+i);
	tr.appendChild(td3);
	
	document.getElementById("payment").innerHTML="Pay $ "+sessionStorage.getItem("totalcost"+i);
	}
}