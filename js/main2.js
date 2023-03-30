const details=[
    {
        foodname:"biriyani",
        shopname:" Hyerabad Briyani",
        location:"Biriyani,North Indian,Chines",
        image:"img/img-1.jpg",
        rating:"4.3",
        time:"32 MIN",
        price:"300 for two ",
        offer: "50% off  Use WELCOME 50"
    },
    {
        foodname:"biriyani",
        shopname:" Mutton Briyani",
        location:"Biriyani,North Indian,Chines",
        image:"img/img-2.jpg",
        rating:"4.7",
        time:"52 MIN",
        price:"400 for two ",
        offer: "30% off  Use WELCOME 50"
    },
    {
        foodname:"biriyani",
        shopname:" Chicken Briyani",
        location:"Biriyani,North Indian,Chines",
        image:"img/img-4.jpg",
        rating:"4.1",
        time:"35 MIN",
        price:"220 for two ",
        offer: "60% off  Use WELCOME 50"
    },
    {
        foodname:"dosai",
        shopname:"Masal Dosai",
        location:"Andra,North Indian,Chines",
        image:"img/img-3.jpg",
        rating:"4.5",
        time:"45 MIN",
        price:"100 for two ",
        offer: "45% off  Use WELCOME 50"
    },
    {
        foodname:"dosai",
        shopname:"Ghee Dosai",
        location:"Andra,North Indian,Chines",
        image:"img/img-2.jpg",
        rating:"4.5",
        time:"45 MIN",
        price:"100 for two ",
        offer: "45% off  Use WELCOME 50"
    },
    {
        foodname:"dosai",
        shopname:"Egg Dosai",
        location:"Andra,North Indian,Chines",
        image:"img/img-1.jpg",
        rating:"3.8",
        time:"25 MIN",
        price:"100 for two ",
        offer: "45% off  Use WELCOME 50"
    },
    {
        foodname:"dosai",
        shopname:"Naish Dosai",
        location:"Andra,North Indian,Chines",
        image:"img/img-3.jpg",
        rating:"4.5",
        time:"45 MIN",
        price:"100 for two ",
        offer: "45% off  Use WELCOME 50"
    },
    {
        foodname:"dosai",
        shopname:"Onion Dosai",
        location:"Andra,North Indian,Chines",
        image:"img/img-4.jpg",
        rating:"4.5",
        time:"45 MIN",
        price:"100 for two ",
        offer: "45% off  Use WELCOME 50"
    },

]




let home=document.querySelector(".container");
let card=document.createElement("div");
card.classList.add("row");
home.appendChild(card);
details.forEach(list => {

    let cards=document.createElement("div");
    cards.classList.add("col");
    card.appendChild(cards);
    
    let content=document.createElement("div");
    content.classList.add("col-card");
    cards.appendChild(content);
  
      let img=document.createElement("img");
    img.src=list.image;
    content.appendChild(img);

    let head=document.createElement("h3");
    content.appendChild(head);
    head.innerHTML=list.shopname;

    let location=document.createElement("p");
    content.appendChild(location);
    location.innerHTML=list.location;

    let ratingall=document.createElement("div");
    ratingall.classList.add("rating");
    content.appendChild(ratingall);
  
    let rating=document.createElement("p");
    ratingall.appendChild(rating);
    rating.innerHTML=list.rating;
    rating.style.color="#fff"

    let iconstar=document.createElement("span");
    iconstar.setAttribute("class","fa fa-star");
    rating.appendChild(iconstar);

    if(list.rating>4){
        rating.style.backgroundColor="green"
    }
    else{
        rating.style.backgroundColor="#fa4a5b"
    }

    let before=document.createElement("span");
    ratingall.appendChild(before);
    before.innerHTML=".";
    before.style.fontSize="xx-large";

    let time=document.createElement("p");
    ratingall.appendChild(time);
    time.innerHTML=list.time;

    let after=document.createElement("span");
    ratingall.appendChild(after);
    after.innerHTML=".";
    after.style.fontSize="xx-large";

    let price=document.createElement("p");
    ratingall.appendChild(price);
    price.innerHTML=list.price;

    let offer=document.createElement("div");
    content.appendChild(offer);
    offer.classList.add("offer");

    let offer_img=document.createElement("img");
    offer_img.classList.add("offer-img")
    offer_img.src="img/offerim.png"
    offer.appendChild(offer_img);

    
    let offer_text=document.createElement("p");
     offer_text.innerHTML=list.offer;
     offer.appendChild(offer_text);

    let itemsadd=document.createElement("div");
    itemsadd.classList.add("items");
    content.appendChild(itemsadd);

    let btnadd=document.createElement("button");
    itemsadd.appendChild(btnadd);
    btnadd.innerHTML="ADD";
    btnadd.addEventListener("click",a=>{
    
    let prodect=document.createElement("div");
    prodect.classList.add("prodect");
    home.appendChild(prodect);
    
    let prodect1=document.createElement("div");
    prodect1.classList.add("prodect1");
    prodect.appendChild(prodect1);

    let prodect1name=document.createElement("p");
    prodect1name.classList.add("prodect1name");
    prodect1.appendChild(prodect1name);
     


    btnadd.style.display="none";
    let prodectname=document.createElement("div");
    prodectname.classList.add("prodectname");
    content.appendChild(prodectname);

    
    
    let items=document.createElement("div");
    items.classList.add("items");
    itemsadd.appendChild(items);

    let icon1=document.createElement("span");
    icon1.setAttribute("class","fa fa-minus");
    items.appendChild(icon1);

    let item=document.createElement("input");
    item.classList.add("text")
    item.setAttribute("type","text");
    item.setAttribute("value","1");
    items.appendChild(item);
    

    let icon2=document.createElement("span");
    icon2.setAttribute("class","fa fa-plus");
    items.appendChild(icon2);
   
    

    var itemval=parseInt(item.value);
    icon1.addEventListener("click",function(){
    if(item.value==1){
      
       items.remove();
       btnadd.style.display="flex";
    }
    else{
        item.value=--itemval;
    }

    })
  
    icon2.addEventListener("click",function(){
    item.value=++itemval;  
  })
    })   

    

});



// search box
// var search_item=document.querySelector(".item-search");
// var search_icon=document.querySelector(".fa-search");
// function mySearch(){
//     details.forEach(itemname=>{
//         if(search_item.value!=itemname.foodname){
//             cards.remove();
//         }
//         else{
            
//         }
//     })
// }
   
   