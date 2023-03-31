let logo = document.getElementById("logo");
logo.addEventListener("click",function(){
    window.location.href = 'index.html';
})

let usericon = document.querySelector(".userlogin");
usericon.addEventListener("click",function(){
    window.open('signup.html', '_blank');
})

let wishlistIcon = document.querySelector(".wishlist");
wishlistIcon.addEventListener("click",function(){
    window.open('wishlist.html', '_blank');
})

let cartIcon = document.querySelector(".cart");
cartIcon.addEventListener("click",function(){
    window.open('cartpage.html', '_blank');
})


// Fetching API
let url = "https://api.escuelajs.co/api/v1/products/?categoryId=3";

fetch(url).then(function(res){
    return res.json();
}).then(function(data){
    MapData(data);
}).catch(function(error){
    console.log(error);
})


// Mapping Original Data
function MapData(data){
    let a = data.map(function(element){
        return {
            id: element.id,
            title: element.title,
            price: element.price,
            description: element.description,
            image: element.images[0], 
            quantity:1, 
            rating: '⭐⭐⭐⭐(15 Sold)',  
        }
    })
    console.log(a);
    Display(a)
    localStorage.setItem("Product-data",JSON.stringify(a));
}

let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

let CartData = JSON.parse(localStorage.getItem("cart-data")) || [];

//Display Feature
let container = document.getElementById("container");
function Display(data){
    container.innerHTML = null;
    data.forEach(function(element){
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h4");
        let price = document.createElement("p");
        let rating = document.createElement("p");
        let description = document.createElement("p");
        let div = document.createElement("div");
        div.setAttribute("class","buttondiv")
        let wishlistBtn = document.createElement("button");
        let addToCartBtn = document.createElement("button");

        image.setAttribute("src",element.image);
        name.innerText = element.title;
        price.innerText = `₹${element.price}`;
        rating.innerText = element.rating;
        description.innerText = element.description;
        wishlistBtn.innerText = "Wishlist 🤍";
        addToCartBtn.innerText = "Add To Cart";

        wishlistBtn.addEventListener("click",function(){

            let flag1 = checkAvailability(element,"checkforwishlist");
            if(flag1 == true){
                alert("Already Present in the Wishlist ❤");
            }else{
                wishlistData.push(element);
                 localStorage.setItem("wishlist",JSON.stringify(wishlistData));
                alert("Added in Wishlist😍")
            }
           
        })
        addToCartBtn.addEventListener("click",function(){
            let flag = checkAvailability(element,"checkforcart");
            if(flag==true){
                alert("Already Present in the Cart 🎉");
            }else{
                CartData.push(element);
                localStorage.setItem("cart-data",JSON.stringify(CartData));
                alert("Added Successfully in the Cart 🛒")
            }
           
        })

        div.append(wishlistBtn,addToCartBtn)
        card.append(image,name,price,rating,description,div)
        container.append(card);
    })
}

// FilterByPrice
let productData = JSON.parse(localStorage.getItem("Product-data"));


let FilterByPrice = document.getElementById("filterByPrice");

FilterByPrice.addEventListener("click",function(){
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let filterdata = productData.filter(function(elem){
        if(+min.value <= elem.price && +max.value>=elem.price){
            return true;
        }else{
            return false;
        }
    })
    Display(filterdata);
})

//SortBy Feature
let SortBtn = document.getElementById("sortby");
SortBtn.addEventListener("change",function(){
    if(SortBtn.value == ""){
        Display(productData);
    }else
    if(SortBtn.value=="lowtohigh"){
        let temp1 = [...productData]
        temp1.sort(function(a,b){
            return a.price - b.price;
        })
        Display(temp1)
    }else
    if(SortBtn.value== "hightolow"){
        let temp2 = [...productData];
        temp2.sort(function(a,b){
            return b.price - a.price;
        })
        Display(temp2);
    }
})

// Search Feature
let SearchInp = document.getElementById("search");
SearchInp.addEventListener("input",function(){
    let tempData = productData.filter(function(ele){
        if(ele.title.toLowerCase().includes(SearchInp.value.toLowerCase())){
            return true;
        }else{
            false;
        }
    })
    Display(tempData);
})


function checkAvailability(ele,identifier){
    if(identifier=="checkforcart"){
        for(let i=0; i<CartData.length; i++){
            if(ele.id == CartData[i].id){
                return true;
            }
        }
        return false;
    }else
    if(identifier=="checkforwishlist"){
       for(let j=0; j<wishlistData.length; j++){
        if(ele.id == wishlistData[j].id){
            return true;
        }
       }
       return false;
    }
    
}