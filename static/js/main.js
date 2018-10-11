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

