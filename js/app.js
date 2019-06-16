//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and squash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

let changeFinePrint = document.getElementById('disclaimer');
changeFinePrint.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
let cookies = document.getElementById('brand1');
cookies.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
let cheeseOreo = document.getElementById('item1');
cheeseOreo.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
let newPrice = document.getElementById('price1');
newPrice.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
let discButton = document.getElementById('discount1');
discButton.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
let newGin = document.createElement('div');
newGin.id = 'item2';
newGin.innerHTML = "Hendrick's Gin";
let williamgrand = document.getElementById('brand2')
williamgrand.appendChild(newGin);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
let ginPrice = document.createElement('div');
ginPrice.id = 'price2';
ginPrice.innerHTML = '$34.99';
newGin.appendChild(ginPrice);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
let newbutton = document.createElement('button');
newbutton.id = 'discount3';
newbutton.innerHTML = '50% OFF Axe body soap!';
price3.appendChild(newbutton);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
let stuffitem = document.getElementsByClassName('item');
stuffitem[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
let pandadiscount = document.createElement('button');
pandadiscount.className = 'discount';
pandadiscount.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
let stuffprice = document.getElementsByClassName('price');
stuffprice[0].appendChild(pandadiscount);
//let rows = document.getElementsByClassName('block1 col-sm-4'); <- grabs box in a line going down
//rows[1].appendChild(pandadiscount); <-[1] is the second row, which panda is in (index 0 would be the nabisco box)


//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
let stuffBrand = document.getElementsByClassName('brand');
stuffBrand[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
let stuffPrice = document.getElementsByClassName('price');
stuffPrice[1].innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
let newBrand = document.createElement('div');
newBrand.className = 'brand';
newBrand.innerHTML =  'Hifiman Shangri-La';
let headphoneBox = document.getElementsByClassName('block3 col-sm-4');
headphoneBox[1].appendChild(newBrand);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
let headphoneItem = document.createElement('div');
headphoneItem.className = 'item';
headphoneItem.innerHTML = 'Electronstatic Headphones';
newBrand.appendChild(headphoneItem);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
let expensive = document.createElement('div');
expensive.className = 'price';
expensive.innerHTML = '$18,000';
headphoneItem.appendChild(expensive);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
let discountbutton = document.createElement('button');
discountbutton.className = 'discount';
discountbutton.innerHTML = 'Free Barry Manilow CD with purchase!';
expensive.appendChild(discountbutton);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
stuffBrand[3].innerHTML = 'H&M';
stuffitem[3].innerHTML = 'Unicorn-Head Slippers';
stuffprice[3].innerHTML = '$21.99';
let stuffButton = document.getElementsByClassName('discount');
stuffButton[3].innerHTML = 'Free knee-high tube socks with purchase!'


//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
stuffBrand[4].innerHTML = 'Frito Lay';
stuffitem[4].innerHTMl = "Poppin' Jalapeno Doritos";
stuffprice[4].innerHTML = '$7.77';
stuffButton[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
stuffBrand[5].innerHTML = 'Any Dog Breeder';
stuffitem[5].innerHTMl = 'Baby Puggy';
stuffprice[5].innerHTML = 'Priceless';
stuffButton[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.
let stuffPic = document.getElementsByTagName('img');
stuffPic[10].src = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8WLYfBgFBhgIxIZQxxjyEt5gzOxfvui5_fKX6Y6Qi41S3Z3ZGRuCaBbAieoE15ZYfGqRQalt2u67zUmrcVJKZGRyzxYzipSt-rHznf3Y&usqp=CAE';
stuffBrand[6].innerHTML = 'Heros Down Below INC';
stuffitem[6].innerHTML = "saving the world never looked this good";
stuffprice[6].innerHTML = '4 Pack, $5.99';
stuffButton[6].innerHTML = 'Free model with purchase';

stuffPic[11].src = 'https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/4d9b53a8-65bd-4517-a06c-b61ea9c393e9.jpg';
let finalBoss1 = document.getElementsByClassName('block2 col-sm-4');
let sifBrand = document.createElement('div');
sifBrand.className = 'brand';
sifBrand.innerHTML = 'Darks Souls';
finalBoss1[3].appendChild(sifBrand);
let sifItem = document.createElement('div');
sifItem.className = 'item';
sifItem.innerHTML = 'Sif the good boi'
finalBoss1[3].appendChild(sifItem);
let sifPrice = document.createElement('div');
sifPrice.className = 'price';
sifPrice.innerHTML = '3 easy payments of $222';
finalBoss1[3].appendChild(sifPrice);
let sifButton = document.createElement('button');
sifButton.className = 'discount';
sifButton.innerHTML = 'Free trip back to the bonfire of your choice!';
finalBoss1[3].appendChild(sifButton);

stuffPic[12].src = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-gundam-mobile-suit-rx-78-2-statue-odaiba-tokyo-j-roald-nel.jpg';
let finalBoss2 = document.getElementsByClassName('block3 col-sm-4')
let gundamBrand =  document.createElement('div');
gundamBrand.className = 'brand';
gundamBrand.innerHTML = 'ガンダム';
finalBoss2[3].appendChild(gundamBrand);
let gundamItem = document.createElement('div');
gundamItem.className = 'item';
gundamItem.innerHTML = 'Full size RX-78 Gundam';
finalBoss2[3].appendChild(gundamItem);
let gundamPrice = document.createElement('div');
gundamPrice.className = 'price';
gundamPrice.innerHTML = '$5,000,000';
finalBoss2[3].appendChild(gundamPrice);
let gundamButton = document.createElement('button');
gundamButton.className = 'discount';
gundamButton.innerHTML = 'Includes: Beam sword and Rifle!';
finalBoss2[3].appendChild(gundamButton);