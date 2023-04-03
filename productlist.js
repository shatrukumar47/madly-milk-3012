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
    window.location.href = 'wishlist.html';
})

let cartIcon = document.querySelector(".cart");
cartIcon.addEventListener("click",function(){
    window.location.href = 'cartpage.html';
})




const apiData = 
            [
                {
                    "id": 3,
                    "title": "Somerville Fabric 2 Seater Sofa in Dark Olive Coloura",
                    "price": 138,
                    "description": "New range of formal chairs are designed keeping you in mind. With fits and styling that will make you stand apart",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/a/m/494x544/amelia-fabric-1-seater-sofa-in-ash-grey-colour-amelia-fabric-1-seater-sofa-in-ash-grey-colour-kjx8ia.jpg",
                },
                {
                    "id": 19,
                    "title": "Fidel Velvet 2 Seater Sofa In Teal Blue Colour",
                    "price": 316,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/m/i/494x544/miranda-velvet-1-seater-sofa-in-dark-green-colour-by-woodsworth-miranda-velvet-1-seater-sofa-in-dark-qv3qrw.jpg", 
                },
                {
                    "id": 22,
                    "title": "Garnet Fabric 1 Seater Sofa In Titanium Grey Colour",
                    "price": 137,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/somerville-2-seater-sofa-in-dark-olive-colour-by--home-somerville-2-seater-sofa-in-dark-olive-colour-bzrgpy.jpg",
                },
                {
                    "id": 25,
                    "title": "Gustowe Large Writing Table in White Finish",
                    "price": 771,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/u/494x544/gustowe-study-table-in-white-colour-by-bluewud-gustowe-study-table-in-white-colour-by-bluewud-jppmjd.jpg",
                },
                {
                    "id": 26,
                    "title": "Nakamura Hutch Desk in Wenge Finish",
                    "price": 197,
                    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/n/a/494x544/nakamura-study-table-with-cabinet-in-wenge-finish-by-mintwud-nakamura-study-table-with-cabinet-in-we-gkuozn.jpg",
                },
                {
                    "id": 29,
                    "title": "Kosmo Harmony Coffee Table in Natural Teak Finish",
                    "price": 290,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/k/o/494x544/kosmo-harmony-coffee-table-in-natural-teak-finish-by-spacewood-kosmo-harmony-coffee-table-in-natural-qqbomr.jpg",
                },
                
                {
                    "id": 113,
                    "title": "Simson Plastic Iconic Chair in Black Colour",
                    "price": 17,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/simson-study-chair-in-black-colour-by-trevi-furniture-simson-study-chair-in-black-colour-by-trevi-fu-4kxvbg.jpg",
                },
                {
                    "id": 119,
                    "title": "William Sheesham Wood Arm Chair In Provincial Teak Finish",
                    "price": 767,
                    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/w/i/494x544/william-solid-wood-armchair-in-provincial-teak-finish-by-amberville-william-solid-wood-armchair-in-p-8neir8.jpg",
                },
                {
                    "id": 120,
                    "title": "Aesthetic Fabric Iconic Chair in Multi Colour",
                    "price": 847,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": 'https://ii3.pepperfry.com/media/catalog/product/a/e/494x544/aesthetic-iconic-chair-in-multicolour-by-pansy-furniture-aesthetic-iconic-chair-in-multicolour-by-pa-c89grf.jpg',
                },
                {
                    "id": 123,
                    "title": "Teak Wood Kutustha Large Mandir With Storage",
                    "price": 100,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/t/e/494x544/teak-wood-mandir-in-golden-by-dzyn-furnitures-teak-wood-mandir-in-golden-by-dzyn-furnitures-h3z3xu.jpg",
                },
                {
                    "id": 128,
                    "title": "Teak Wood Antarusya Golden Mandir With Storage",
                    "price": 21,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/o/494x544/gold-teak-wood-pooja-mandir-without-door-by-dzyn-furnitures-gold-teak-wood-pooja-mandir-without-door-bvprzo.jpg",
                },
                {
                    "id": 3,
                    "title": "Somerville Fabric 2 Seater Sofa in Dark Olive Coloura",
                    "price": 138,
                    "description": "New range of formal chairs are designed keeping you in mind. With fits and styling that will make you stand apart",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/a/m/494x544/amelia-fabric-1-seater-sofa-in-ash-grey-colour-amelia-fabric-1-seater-sofa-in-ash-grey-colour-kjx8ia.jpg",
                },
                {
                    "id": 19,
                    "title": "Fidel Velvet 2 Seater Sofa In Teal Blue Colour",
                    "price": 316,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/m/i/494x544/miranda-velvet-1-seater-sofa-in-dark-green-colour-by-woodsworth-miranda-velvet-1-seater-sofa-in-dark-qv3qrw.jpg", 
                },
                {
                    "id": 22,
                    "title": "Garnet Fabric 1 Seater Sofa In Titanium Grey Colour",
                    "price": 137,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/somerville-2-seater-sofa-in-dark-olive-colour-by--home-somerville-2-seater-sofa-in-dark-olive-colour-bzrgpy.jpg",
                },
                {
                    "id": 25,
                    "title": "Gustowe Large Writing Table in White Finish",
                    "price": 771,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/u/494x544/gustowe-study-table-in-white-colour-by-bluewud-gustowe-study-table-in-white-colour-by-bluewud-jppmjd.jpg",
                },
                {
                    "id": 26,
                    "title": "Nakamura Hutch Desk in Wenge Finish",
                    "price": 197,
                    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/n/a/494x544/nakamura-study-table-with-cabinet-in-wenge-finish-by-mintwud-nakamura-study-table-with-cabinet-in-we-gkuozn.jpg",
                },
                {
                    "id": 29,
                    "title": "Kosmo Harmony Coffee Table in Natural Teak Finish",
                    "price": 290,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/k/o/494x544/kosmo-harmony-coffee-table-in-natural-teak-finish-by-spacewood-kosmo-harmony-coffee-table-in-natural-qqbomr.jpg",
                },
                
                {
                    "id": 113,
                    "title": "Simson Plastic Iconic Chair in Black Colour",
                    "price": 17,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/simson-study-chair-in-black-colour-by-trevi-furniture-simson-study-chair-in-black-colour-by-trevi-fu-4kxvbg.jpg",
                },
                {
                    "id": 119,
                    "title": "William Sheesham Wood Arm Chair In Provincial Teak Finish",
                    "price": 767,
                    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/w/i/494x544/william-solid-wood-armchair-in-provincial-teak-finish-by-amberville-william-solid-wood-armchair-in-p-8neir8.jpg",
                },
                {
                    "id": 120,
                    "title": "Aesthetic Fabric Iconic Chair in Multi Colour",
                    "price": 847,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": 'https://ii3.pepperfry.com/media/catalog/product/a/e/494x544/aesthetic-iconic-chair-in-multicolour-by-pansy-furniture-aesthetic-iconic-chair-in-multicolour-by-pa-c89grf.jpg',
                },
                {
                    "id": 123,
                    "title": "Teak Wood Kutustha Large Mandir With Storage",
                    "price": 100,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/t/e/494x544/teak-wood-mandir-in-golden-by-dzyn-furnitures-teak-wood-mandir-in-golden-by-dzyn-furnitures-h3z3xu.jpg",
                },
                {
                    "id": 128,
                    "title": "Teak Wood Antarusya Golden Mandir With Storage",
                    "price": 21,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/o/494x544/gold-teak-wood-pooja-mandir-without-door-by-dzyn-furnitures-gold-teak-wood-pooja-mandir-without-door-bvprzo.jpg",
                },{
                    "id": 3,
                    "title": "Somerville Fabric 2 Seater Sofa in Dark Olive Coloura",
                    "price": 138,
                    "description": "New range of formal chairs are designed keeping you in mind. With fits and styling that will make you stand apart",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/a/m/494x544/amelia-fabric-1-seater-sofa-in-ash-grey-colour-amelia-fabric-1-seater-sofa-in-ash-grey-colour-kjx8ia.jpg",
                },
                {
                    "id": 19,
                    "title": "Fidel Velvet 2 Seater Sofa In Teal Blue Colour",
                    "price": 316,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/m/i/494x544/miranda-velvet-1-seater-sofa-in-dark-green-colour-by-woodsworth-miranda-velvet-1-seater-sofa-in-dark-qv3qrw.jpg", 
                },
                {
                    "id": 22,
                    "title": "Garnet Fabric 1 Seater Sofa In Titanium Grey Colour",
                    "price": 137,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/somerville-2-seater-sofa-in-dark-olive-colour-by--home-somerville-2-seater-sofa-in-dark-olive-colour-bzrgpy.jpg",
                },
                {
                    "id": 25,
                    "title": "Gustowe Large Writing Table in White Finish",
                    "price": 771,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/u/494x544/gustowe-study-table-in-white-colour-by-bluewud-gustowe-study-table-in-white-colour-by-bluewud-jppmjd.jpg",
                },
                {
                    "id": 26,
                    "title": "Nakamura Hutch Desk in Wenge Finish",
                    "price": 197,
                    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/n/a/494x544/nakamura-study-table-with-cabinet-in-wenge-finish-by-mintwud-nakamura-study-table-with-cabinet-in-we-gkuozn.jpg",
                },
                {
                    "id": 29,
                    "title": "Kosmo Harmony Coffee Table in Natural Teak Finish",
                    "price": 290,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/k/o/494x544/kosmo-harmony-coffee-table-in-natural-teak-finish-by-spacewood-kosmo-harmony-coffee-table-in-natural-qqbomr.jpg",
                },
                
                {
                    "id": 113,
                    "title": "Simson Plastic Iconic Chair in Black Colour",
                    "price": 17,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/simson-study-chair-in-black-colour-by-trevi-furniture-simson-study-chair-in-black-colour-by-trevi-fu-4kxvbg.jpg",
                },
                {
                    "id": 119,
                    "title": "William Sheesham Wood Arm Chair In Provincial Teak Finish",
                    "price": 767,
                    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                    "images":"https://ii3.pepperfry.com/media/catalog/product/w/i/494x544/william-solid-wood-armchair-in-provincial-teak-finish-by-amberville-william-solid-wood-armchair-in-p-8neir8.jpg",
                },
                {
                    "id": 120,
                    "title": "Aesthetic Fabric Iconic Chair in Multi Colour",
                    "price": 847,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": 'https://ii3.pepperfry.com/media/catalog/product/a/e/494x544/aesthetic-iconic-chair-in-multicolour-by-pansy-furniture-aesthetic-iconic-chair-in-multicolour-by-pa-c89grf.jpg',
                },
                {
                    "id": 123,
                    "title": "Teak Wood Kutustha Large Mandir With Storage",
                    "price": 100,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": "https://ii1.pepperfry.com/media/catalog/product/t/e/494x544/teak-wood-mandir-in-golden-by-dzyn-furnitures-teak-wood-mandir-in-golden-by-dzyn-furnitures-h3z3xu.jpg",
                },
                {
                    "id": 128,
                    "title": "Teak Wood Antarusya Golden Mandir With Storage",
                    "price": 21,
                    "description": "The Footsofa Is Good For Training And Recreational Purposes",
                    "images": "https://ii2.pepperfry.com/media/catalog/product/g/o/494x544/gold-teak-wood-pooja-mandir-without-door-by-dzyn-furnitures-gold-teak-wood-pooja-mandir-without-door-bvprzo.jpg",
                },
               
            ]

//Display Feature
let container = document.getElementById("container");
MapData(apiData);


// Mapping Original Data
function MapData(data){
    let a = data.map(function(element){
        return {
            id: element.id,
            title: element.title,
            price: element.price,
            description: element.description,
            image: element.images, 
            quantity:1, 
            rating: '⭐⭐⭐⭐(15 Sold)',  
            disclaimer: "Accessories shown in the image are only for representation and are not part of the product Depending on your screen settings and resolution on your device there may be a slight variance in fabric color and wood polish of the image and actual product. Wood grains will vary from product to product in case of solid wood furniture. Furniture having intricate hand-painted details are individual unique pieces and may have slight distinctions and variance between the picture and actual product.The Primary material is the main material used to manufacture the product and in addition to the primary material there might also be other type of materials used in the manufacturing of the product",
            productDetails : [
                {
                    brand: "Woodsworth from Pepperfry",
                    assembly : "Carpenter Assembly",
                    collections : "Hugo",
                    dimensions : "Sofa : H 33 x W 79 x D 34; Lounger : H 33 x W 30 x D 58; Seating Height - 16; Seating Depth : 21.5 (all dimensions in inches)" ,
                    type: "Living Room",
                    warranty: "36 Months' Warranty"
                }
            ]
        }
    })
    console.log(a);
    Display(a)
    localStorage.setItem("Product-data",JSON.stringify(a));
}


let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

let CartData = JSON.parse(localStorage.getItem("cart-data")) || [];


function Display(data){
    console.log(data)
    container.innerHTML = null;
    const productViewData =JSON.parse(localStorage.getItem('product-view')) || [];
    localStorage.setItem("product-view", JSON.stringify(productViewData));
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

        // brand.innerText = element.productDetails[0].brand

        //
        image.addEventListener("click",function(){
            const data = JSON.parse(localStorage.getItem("product-view"));
            if(data.length == 0){
                data.push(element);
                localStorage.setItem("product-view", JSON.stringify(data));
               
            }else{
                data.pop()
                localStorage.setItem("product-view", JSON.stringify(data));
                data.push(element);
                localStorage.setItem("product-view", JSON.stringify(data));
            }
            window.open('productviewpage.html', '_blank');
        })

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