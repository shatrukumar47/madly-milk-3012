let logo = document.getElementById("logo");
logo.addEventListener("click",function(){
    window.location.href = 'index.html';
})


let usericon = document.querySelector(".userlogin");
usericon.addEventListener("click",function(){
    window.open('signup.html', '_blank');
})

let signupimage = document.getElementById("signupimage");
signupimage.addEventListener("click",function(){
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

let saleimg = document.getElementById("sale");
saleimg.addEventListener("click",function(){
    window.location.href = 'productlist.html';
})

let a = document.querySelectorAll(".nav3 a");

for(let i=0; i<a.length; i++){
    a[i].addEventListener("click",function(){
        window.open('productlist.html', '_blank');
    })
}

// let productData = JSON.parse(localStorage.getItem("Product-data"));
