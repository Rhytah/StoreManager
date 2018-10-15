//show signup when button is clicked            
function show(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
    e.style.display = 'block';
    else
    e.style.display = 'none';
    }
//hide login
function hide(id) {
    var d = document.getElementById(id);
    if(d.style.display == 'block')
    d.style.display ='none';
    else
    d.style.display='block';
  }


//create array that will hold all ordered products
    var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product 
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
        //total sum of price
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }


    function AddtoCart(name,description,price){

       var singleProduct = {};
    
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to  cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    }  
    //display ordered items
    function salerep(){
        shoppingCart.tostring();
        document.getElementById("sales").innerHTML=shoppingCart;

    }
//create sale record
function create_sr(srecords){
    var table = document.getElementById('srecords');
    var newrow = table.insertRow(0);
    var newcell= newcell.insertCell(0);
    var newtxt = document.createTextNode('new sale record');
    newcell.appendChild(newtxt);
    newrow.appendChild(newcell);
    table.appendChild(newrow)
}
//user messages
function userAlert(){
    alert("Please Log in as admin to gain access!");
}
//success message 
function createdAlert(){
    alert("You have created a sale record");
}

//open tab 
function opentab(evt, tabName ){
    var t, tabcontent, tablink;
    tabcontent=document.getElementsByClassName('tabcontent');
    for(t=0; t< tabcontent.length; t++){
      tabcontent[t].style.display="none";
    }
    tablink =document.getElementsByClassName('tablink');
    for(t=0; t <tablink.length; t++){
      tablink[t].className = tablink[t].className.replace("active ", "");
    }
    document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";

}


// add new attendant
function addRow() {
    var table = document.getElementById("storeattendants");
    var row = table.insertRow(8);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "New id";
    cell2.innerHTML = "Store attendant name ";
    cell3.innerHTML = "email";
    cell4.innerHTML = "contact";
    cell5.innerHTML = "Active";
}

//create sale record
function createRecord() {
    var table = document.getElementById("srecords");
    var row = table.insertRow(6);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = "New id";
    cell2.innerHTML = "Store attendant name ";
    cell3.innerHTML = "email";
    cell4.innerHTML = "contact";
    
}
// add new attendant
function addProduct() {
    var table = document.getElementById("products");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = "New Product code";
    cell2.innerHTML = "New Product ";
    cell3.innerHTML = "New Product details";
    cell4.innerHTML = "New Unit price";
    cell5.innerHTML = "New Current-stock";
    cell6.innerHTML = "New initial-stock";
    cell7.innerHTML = "Minimum"
}

    
//     var table=document.getElementById("srecords");
//     var values=new Array(3);
//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
//     var txt = document.createElement("");
//     var num = document.createElement("");
//     var mixed= document.getElementById("record")
//     var tbody= document.createElement("tbody");

//     td.appendChild(num);
//     td.appendChild(txt);
//     tr.appendChild(td);
//     table.appendChild(tr);

//     for (var i=0; i <values.length;i++){
//         var tr=document.createElement("tr");
//         for (var j=0; j<values[i].length;j++){
//             var td = document.createElement("td");
//             var txt = document.createTextNode(values[i][j]);
//             td.appendChild(txt);
//             tr.appendChild(td)
//         }
//         tbody.appendChild(tr);
//     }

// }
// function totalprice() {
// var totalFields = document.input.time.length;
// for(var i=0; i <= totalFields; i++){
//     document.input.total[i].value = ( document.input.time[i].value * document.input.cost[i].value);
// }
// return false; }


