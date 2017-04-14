var array_item = new Array("Microsoft","PTT","Google","Mcdonald","HaagenDazs","Yahoo","Nike","LG",
							"Family","Dropbox","CocaCola","BMW","Apple","Android","7-11","Adidas") ;

var size_bingotable = 4 ;

var div_database = document.createElement("div") ;
var div_bingotable = document.createElement("div") ;
var div_call = document.createElement("div") ;

var table_database = document.createElement("table") ;
var table_bingotable = document.createElement("table") ;

var select_call = document.createElement("select") ;

var button_coffrim = document.createElement("button") ;
var button_call = document.createElement("button") ;

SetTable(table_database,1,1,100,50,1) ;
SetTable(table_bingotable,size_bingotable,size_bingotable,100,100,1) ;

SetTableMin(table_database,100,100) ;
SetTableMin(table_bingotable,150,150) ;

for ( var i = 0 ; i < array_item.length ; i ++ )
{
	InsertDataBase(array_item[i]) ;
	select_call.options.add(new Option(array_item[i],array_item[i]));  
}

button_coffrim.style.width = "100%" ;
button_coffrim.style.height = 50 ;
button_coffrim.innerHTML = "確認" ;

button_call.style.width = "50%" ;
button_call.style.height = 50 ;
button_call.innerHTML = "叫號" ;

select_call.style.width = "50%" ;
select_call.style.height = 50 ;

button_coffrim.setAttribute("onclick","Confirm_layout();Confirm_game()") ;
button_call.setAttribute("onclick","Call(select_call.value)")

div_database.appendChild(table_database) ;
div_bingotable.appendChild(table_bingotable) ;
div_call.appendChild(button_coffrim) ;

document.body.appendChild(div_database);
document.body.appendChild(div_bingotable);
document.body.appendChild(div_call);

function SetTable(t ,  r ,  c ,  w ,  h ,  b )
{
	for( var i = 0 ; i < r ; i ++ ) { 
		t.insertRow(); 
	    for( var j = 0 ; j < c ; j ++ ) { 
			t.rows[i].insertCell(j);
			t.rows[i].cells[j].setAttribute("ondrop", "Drop(event)") ;
			t.rows[i].cells[j].setAttribute("ondragover","AllowDrop(event)") ;
			t.rows[i].cells[j].align = "middle" ;
		}    
	} 
	t.width = w + "%"  ;
	t.height = h + "%"  ;
	t.border = b ;
}

function SetTableMin (t , w , h )
{
	for ( i = 0 ; i < t.rows.length ; i ++ )
	{
		t.rows[i].cells[0].height = h ;
		for ( j = 0 ; j < t.rows[i].cells.length ; j ++ )
			t.rows[i].cells[j].width = w ;
	}
}

function InsertDataBase(s)
{
	var img_newitem = document.createElement("img") ;
	img_newitem.src = "pic/" + s + ".png" ;
	img_newitem.setAttribute("id", s); 
	img_newitem.width = 100 ;
	img_newitem.height = 100 ;
	img_newitem.setAttribute("draggable", true);
	img_newitem.setAttribute("ondragstart","Drag(event)") ;
	table_database.rows[0].cells[0].appendChild(img_newitem) ;
}

function AllowDrop(event){
	event.preventDefault();
}

function Drag(event){
	event.dataTransfer.setData("text",event.currentTarget.id);
}

function Drop(event){
	if ( event.currentTarget.childNodes[0] != null && event.currentTarget != table_database )
	{
		table_database.rows[0].cells[0].appendChild(document.getElementById(event.currentTarget.childNodes[0].id));
	}
	event.preventDefault();
	var data=event.dataTransfer.getData("text");
	event.currentTarget.appendChild(document.getElementById(data));
}

function Confirm_layout(){
	div_call.removeChild(div_call.lastChild) ;
	div_call.appendChild(select_call) ;
	div_call.appendChild(button_call) ;
	for ( var i = 0 ; i < array_item.length ; i ++ )
		document.getElementById(array_item[i]).draggable = false ;
}



