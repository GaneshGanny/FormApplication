   
/*var x = add(5,50);
console.log(x);

function add(a,b){
	var c = a+b;
	return c;
}*/


/*var add=function(a,b)
{
	var c = a+b;
	return c;
}
var sub=function(a,b)
{
	var c=a-b;
	return c;
}
var mul=function(a,b)
{
	var c=a*b;
	return c;
}
var div=function(a,b)
{
	var c=a/b;
	return c;
}
var result1=add(5,10);
console.log(result1);

var result2=sub(15,5);
console.log(result2);

var result3=mul(5,10);
console.log(result3);

var result4=div(15,5);
console.log(result4); */



/*function sum()
{
	console.log(arguments); // 2,3,4
	console.log('--------------------------------------------------------');
	console.log(arguments.length); //3
	console.log('--------------------------------------------------------');
	var result=0;
	var i=0;
	var len=arguments.length; //3
     for(i=0;i<len;i++)
     {
     	result=result+arguments[i]; // arguments[0]
     	
     }
     return result;
}

var x=sum(2,3,4);
console.log('--------------------------------------------------------');
console.log(x);*/


/*function mul()
{
	var result=1;
	var i=0;
	var len=arguments.length;
     while(i<len)
     {
     	result=result*arguments[i];
     	i++;
     }
     return result;
}
var y=mul(3,4,5);
console.log(y);
var z = mul(5,7,2,4);
console.log(z);*/

/*var x1=[
    {
        "empname": "ganesh",
        "empid": "tech001",
        "age": "23",
        "salary": "45000",
        "company": "nttdata"
    },
    {
        "empname": "pooja",
        "empid": "tech002",
        "age": "22",
        "salary": "40000",
        "company": "american express"
    },
    {
        "empname": "ankar",
        "empid": "tech003",
        "age": "25",
        "salary": "60000",
        "company": "trainz"
    },
    {
        "empname": "arifa",
        "empid": "tech004",
        "age": "25",
        "salary": "60000",
        "company": "techninza"
    },
    {
        "empname": "apporva",
        "empid": "techoo5",
        "age": "23",
        "salary": "45000",
        "company": "nttdat"
    }
];

console.log(x1.length);

for(var i=0; i<x1.length; i++)
{
	console.log(x1[i].empname);
	console.log(x1[i].empid);
console.log(x1[i].salary);
	console.log(x1[i].company);
}

function myfunction()
{
	var xyz = "";
	for(var i=0;i<x1.length;i++)
	{
		xyz = "<tr><td>"+x1[i].empname+"</td><td>"+x1[i].empid+"</td><td>"+x1[i].age+"</td><td>"+x1[i].salary+"</td><td>"+x1[i].company+"</td></tr>";
		console.log(xyz);
	}
	document.getElementById('details').innerHTML = xyz;
}*/

/*function myfunction()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		console.log(this);
		if (this.status==200 && this.readyState == 4){

			/console.log(this.responseText);
			var xyz = '';
			var x1 = JSON.parse(this.responseText);
			console.log(this.responseText);
			for(var i=0;i<x1.length;i++) {
				xyz += "<tr><td>"+x1[i].empname+"</td><td>"+x1[i].empid+"</td><td>"+x1[i].age+"</td><td>"+x1[i].salary+"</td><td>"+x1[i].company+"</td></tr>";
			}
			document.getElementById('details').innerHTML = xyz;
		}
	}
	xhttp.open("GET","https://api.myjson.com/bins/5abgr",true);
	//xhttp.open("GET","https://api.myjson.com/bins/3uoqv",true);
	xhttp.send();
}*/

/*function myfunction()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		console.log(this);
		if (this.status==200 && this.readyState == 4){

			console.log(this.responseText);
			var xyz = '';
			var x1 = JSON.parse(this.responseText);
			console.log(this.responseText);
			for(var i=0;i<x1.length;i++) {
				xyz += "<tr><td>"+x1[i].id+"</td><td>"+x1[i].componentId+"</td><td>"+x1[i].patternId+"</td><td>"+x1[i].fit+"</td><td>"+x1[i].fabric+"</td><td>"+x1[1].category+"</td><td>"+x1[i].morganComponentId+"</td></tr>";
			}
			document.getElementById('details').innerHTML = xyz;
		}
	}
	
	xhttp.open("GET","https://api.myjson.com/bins/3uoqv",true);
	xhttp.send();
}*/


	$.ajax({
		url: 'https://www.flipkart.com/lc/getData?dataSourceId=websiteNavigationMenuDS_1.0',
		type: 'GET',
		success:function(data){
			console.log(data);
		},
		error:function(e){
			console.log(e);
		}
	});



function myfunction()
{
	var xhttp = new XMLHttpRequest;

	xhttp.onreadystatechange=function(){
		//console.log(this);
		if(this.status == 200 && this.readyState == 4){
			console.log(this.responseText);
			var x = JSON.parse(this.responseText);
			var x1 = x.navData.electronics.tabs[0].columns[0];
			var x2 = x.navData.electronics.tabs[0].columns[1];
			var x3 = x.navData.electronics.tabs[0].columns[2];
			var x4 = x.navData.electronics.tabs[0].columns[3];
			var x5 = x.navData.electronics.tabs[0].columns[4];

			
			var xyz="";
			for(var i=0;i<x1.length;i++)
			{
				xyz += '<li>'+x1[i].title+'</li>';

			}
			document.getElementById('MobileBLock').innerHTML=xyz;



			var xyz1="";

			for(var i=0;i<x2.length;i++)
			{
				xyz1=xyz1+x2[i].title;
			}

			document.getElementById('data1').innerHTML=xyz1;




			var xyz2="";

			for(var i=0;i<x3.length;i++)
			{
				xyz2=xyz2+x3[i].title;
			}

			document.getElementById('data2').innerHTML=xyz2;

            
            var xyz3="";

			for(var i=0;i<x4.length;i++)
			{
				xyz3=xyz3+x4[i].title;
			}

			document.getElementById('data3').innerHTML=xyz3;

			var xyz4="";

			for(var i=0;i<x5.length;i++)
			{
				xyz4=xyz4+x5[i].title;
			}

			document.getElementById('data4').innerHTML=xyz4;




		}
	}
	
	xhttp.open("GET","https://www.flipkart.com/lc/getData?dataSourceId=websiteNavigationMenuDS_1.0",true);
	xhttp.send();
}







//alert("ganesh");

//confirm("ganesh");

//prompt();


 /*6 differnet window objects

 1.alert

 window.alert

 2.confirm

 window.confirm

 3.prompt

 window.prompt

 4.open

 window.open

 5.close

 6.setTimeout*/


/*var x= function()
{
	alert("hello");
};






window.setTimeout(x,3000);*/


dom


browser understands html in a tree form


w3 document object model is a platforma and language intergace that allows program and script to dynamically access and update the content structure and style of the document.

three types of dom

1.core dom
2.xml dom
3.html dom


when a web page is loaded the browser creates a document object model of the page.

the html dom model is constructed as a tree of objects.




html dom


1.document object

we can access and change the content by its method.


document.write("ganesh");


document.getElementById(" ");


document.getElementsByName(" ");

document.getElementsByClassName(" ");

document.getElementsByTagName(" ");


dom events

the dom events the js to register different event handlers on elements in an html document.

events are normallly used in combination with functions.

and the function will not be execute before the events occur.

on click-when a user clicks on a particular element.

ondblclick

mouse events

onmouseenter

onmousedown

onmouseover

onmousemove

onmouseup

onmouseout


keyboard events


onkeydown

onkeypress

onkeyup


form events

onblur

onchange


onfocus

oninput()

onreset()

onsearch()

onselect()


onsubmit()



onload()

onpageshow()

onscroll()

onresize()


ondrag()


ondragstart()

onddragend()


ondrop()


preventdefault()


it cancels the events  it can get cancelled.

the default action will not happen.



stopimmediatepropagation()



stoppropagation()






























 







/*var x= 'https://api.myjson.com/bins/3uoqv';
    console.log(x.length);
function myfunction()
{
	var tbody="";
	for(var i=0;i<x.length;i++)
	{
      tbody =tbody+"<tr><td>"+x[i].id+"</td><td>"+x[i].componentId+"</td><td>"+x[i].patternId+"</td><td>"+x[i].fit+"</td><td>"+x[i].fabric+"</td><td>"+x[i].category+"</td><td>"+x[i].morganComponentId+"</td></tr>";
	}
	document.getElementById('data').innerHTML=tbody;
}
*/




/*function myfunction()
{
var text = '';
var i=11;
do
{
	text += 'I value is : '+i;
	i++;
}
while (i<10);
document.getElementById('data').innerHTML = text;
}*/






























/*var array1=[];

array1.push(x1,x2,x3,x4,x5);
console.log(array1);

console.log(array1.length);
console.log(x1.length);*/

/*var tbodyData='';

for(var i=0; i<array1.length;i++)
{
	console.log(array1[i].empid+' '+array1[i].empname+' '+array1[i].company);
	tbodyData += '<tr><td>'+array1[i].empid+'</td><td>'+array1[i].empname+'</td><td>'+array1[i].company+'</td></tr>';
}
console.log(tbodyData);*/
/*var table=document.createElement("TABLE");


function myfunction()
{

	
	var tbody=document.createElement("TBODY");
	table.border='1';
	table.appendChild(tbody);

	var heading=[];
	heading[0]="Employee Id";
	heading[1]="Employee Name";
	heading[2]="age";
	heading[3]="salary";
	heading[4]="company";

	var details=[];
	details[0]=["tech001","ganesh","23","45000","nttdata"];
	details[1]=["tech002","pooja","23","40000","american express"];
	details[2]=["tech003","ankar","26","60000","trainz"];
	details[3]=["tech004","arifa","25","60000","techninza"];
	console.log(details[0].length);

	var tr=document.createElement("TR");

	tbody.appendChild(tr);

	for(var i=0;i<heading.length;i++)
	{
		var th=document.createElement("TH");
		th.width="100px";
		th.appendChild(document.createTextNode(heading[i]));
		tr.appendChild(th);
	}



	for(var i=0;i<details.length;i++)
	{
		var tr=document.createElement("TR");
		for(var j=0;j<details[i].length;j++)
		{
			var td=document.createElement("TD");
			td.appendChild(document.createTextNode(details[i][j]));
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}

}*/













/*var fruits=["apple","banana","pineapple","papaya","watermelon"];

console.log(fruits);
console.log(fruits.length);

fruits.push("grapes");

console.log(fruits);
console.log(fruits.length);

var len=fruits.length;
var i=0;

var z;

for(i=0;i<len;i++)
{
	z=fruits[i];
}
console.log(z);
console.log(typeof(fruits));


/*var z=[10,20,30,40,50,60,70,80,90];

len=z.length;
var sum=0;

for(var i=0;i<len;i++)

{
	sum=sum+z[i];
}
console.log(sum);*/





















/*function submit()
{

	var pname1=document.getElementById('name11').value;

	if(pname1=="")
	{
		alert("Participants name should not be empty");
		return;
	}

	if(!isNaN(pname1))
	{
		alert("Please enter only alpha characters");
		return;
	}

	var pname2=document.getElementById('name22').value;

	if(pname2=="")
	{
		alert("Module should not be empty");
		return;
	}
	if(!isNaN(pname2))
	{
		alert("Please enter only alpha characters");
		return;
	}

	var pname3=document.getElementById('name33').value;

	if(pname3=="")
	{
		alert("Trainers name should not be empty");
		return;
	}
	if(!isNaN(pname3))
	{
		alert("Please enter only alpha characters");
		return;
	}

	var pname4=document.getElementById('name44').value;

	if(pname4=="")
	{
		alert("Please enter the date");
		return;
	}

	var pname5=document.getElementById('name55').value;

	if (pname5=="")

     {
     	alert("Please enter the phonenumber");
     }	

 }*/

