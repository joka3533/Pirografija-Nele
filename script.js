//....................................................burger menu......................................................

const nav = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=> {
    nav.classList.add('open');
}
document.querySelector('#close-btn').onclick = ()=> {
    nav.classList.remove('open');
}



//...............................................usluge...show-more-text..................................................

const btnsSeeMore = document.querySelectorAll('.btn-see-more');
const btnsHideMore = document.querySelectorAll('.btn-hide');

function showMoreText(e){
    const mainEl = e.target.parentElement;
    const moreText = mainEl.querySelector('.more-text');
    const lessText = mainEl.querySelector('.btn-hide');

    moreText.style.display = 'inline';
    e.target.style.display = 'none';
    lessText.style.display = 'inline';

    for(i=0; i<btnsHideMore.length; i++){
        btnsHideMore[i].addEventListener('click', (e)=> {
            moreText.style.display = 'none';
            e.target.previousElementSibling.style.display = 'inline';
            e.target.style.display = 'none';
        });
    }
    
}

for(i=0; i<btnsSeeMore.length; i++){
    btnsSeeMore[i].addEventListener('click', showMoreText);
}








//....................................................gallery...........................................................

const div_photo = document.querySelector('.photo-div');

let piray = [];

//constructor function
class Piro {
    constructor(name, pics, group, size, price, measure) {
        this.name = name;
        this.pics = pics;
        this.group = group;
        this.size = size;
        this.price = price;
        this.measure = measure;
    }
}
const obj1 = piray.push(new Piro("Sveti Vasilije Ostroški", "gallery/pic1.jpg", "ikone", "0cm ", 0));
const obj2 = piray.push(new Piro("Sveti Jovan Krstitelj", "gallery/pic2.jpg", "ikone", "26x18cm", 3500));
const obj3 = piray.push(new Piro("Ostrog", "gallery/pic3.jpg", "ikone", "21x14cm", 2000));
const obj4 = piray.push(new Piro("Sveti Stefan", "gallery/pic4.jpg", "ikone", "0cm", 0));
const obj5 = piray.push(new Piro("Vuk", "gallery/pic5.png", "slike", "25,5x14cm", 2000));
const obj6 = piray.push(new Piro("Sat Jednorog", "gallery/pic6.png", "satovi deca personal", "21x21cm", 1000));
const obj7 = piray.push(new Piro("Pesma", "gallery/pic7.jpg", "ukrasi personal", "0cm", 0));
const obj8 = piray.push(new Piro("Sveti Vasilije Ostroški", "gallery/pic8.jpg", "ikone", "26x17cm", 6000));
const obj9 = piray.push(new Piro("Sveti Avramije", "gallery/pic9.jpg", "ikone", "0cm", 0));
const obj10 = piray.push(new Piro("Bogorodica i Isus", "gallery/pic10.jpg", "ikone", "21x14cm", 2500));
const obj11 = piray.push(new Piro("Sat Nindža Kornjače", "gallery/pic11.png", "satovi deca personal", "21x21cm", 1000));
const obj12 = piray.push(new Piro("Patrijarh Pavle", "gallery/pic12.jpg", "ikone, portreti", "29x21cm", 5000));
const obj13 = piray.push(new Piro("Patrijarh Pavle", "gallery/pic13.jpg", "ikone portreti", "29x21cm", 6000));
const obj14 = piray.push(new Piro("Kutija Barbi", "gallery/pic14.png", "kutije personal deca", "", ""));
const obj15 = piray.push(new Piro("Kutija Mini", "gallery/pic15.png", "kutije personal deca", "", ""));
const obj16 = piray.push(new Piro("Kuhinjska daska", "gallery/pic16.png", "kuca", "", 600));
const obj17 = piray.push(new Piro("Kuhinjska daska", "gallery/pic17.png", "kuca", "", 800));
const obj18 = piray.push(new Piro("Podmetač za čaše Ruže", "gallery/pic18.png", "kuca", "9,5x9,5cm", 100, "/kom"));
const obj19 = piray.push(new Piro("Sv Nikola - Blagoslov", "gallery/pic19.png", "ikone", "36,5x13,5cm", 4000));
const obj20 = piray.push(new Piro("Sunđer Bob", "gallery/pic20.png", "ukrasi deca slike", "0cm", 0));
const obj21 = piray.push(new Piro("Sat Ptice", "gallery/pic21.png", "satovi deca", "21x21cm", 1000));
const obj22 = piray.push(new Piro("Arhangel Mihailo", "gallery/pic22.png", "ikone", "26x17cm", 3500));
const obj23 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic23.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj24 = piray.push(new Piro("Sveti Georgije", "gallery/pic24.jpg", "ikone", "29,5x20,5cm", 6000));
const obj25 = piray.push(new Piro("Sat Crvena Zvezda", "gallery/pic25.png", "satovi", "21x21cm", 1000));
const obj26 = piray.push(new Piro("Sat Partizan", "gallery/pic26.png", "satovi", "21x21cm", 1000));
const obj27 = piray.push(new Piro("Podmetač za čaše Ruža", "gallery/pic27.png", "kuca", "10cm", 100, "/kom"));
const obj28 = piray.push(new Piro("Vukova kuća magnet", "gallery/pic28.png", "slike", "9,5x6,5cm", 200));
const obj29 = piray.push(new Piro("Sveti Vasilije Ostroški", "gallery/pic29.png", "ikone", "26x17cm", 5000));
const obj30 = piray.push(new Piro("Kuhinjska daska", "gallery/pic30.png", "kuca", "", 600));
const obj31 = piray.push(new Piro("Kutija Crvena Zvezda", "gallery/pic31.png", "kutije personal deca", "", ""));
const obj32 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic32.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj33 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic33.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj34 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic34.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj35 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic35.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj36 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic36.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj37 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic37.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj38 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic38.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj39 = piray.push(new Piro("Novogodišnji ukras", "gallery/pic39.png", "ng-ukrasi", "7cm", 150, "/kom"));
const obj40 = piray.push(new Piro("Delfini", "gallery/pic40.png", "slike", "29,7x20cm", 1500));
const obj41 = piray.push(new Piro("Sv Vasilije Ostroški, Blagoslov", "gallery/pic41.png", "ikone", "0cm", 0));
const obj42 = piray.push(new Piro("Sveta Petka", "gallery/pic42.png", "ikone", "29,7x21cm", 4000));
const obj43 = piray.push(new Piro("Novak Đoković", "gallery/pic43.png", "portreti slike", "29,7x21cm", 3000));
const obj44 = piray.push(new Piro("Beli Anđeo", "gallery/pic44.png", "ikone", "29,7x21cm", 4500));
const obj45 = piray.push(new Piro("Ukrasna Kutija Mini", "gallery/pic45.png", "kutije personal deca", "", ""));
const obj46 = piray.push(new Piro("Varjača", "gallery/pic46.png", "kuca", "", 150, "/kom"));
const obj47 = piray.push(new Piro("Podmetač za čaše Ptica", "gallery/pic47.png", "kuca", "9,5x9,5cm", 100, "/kom"));





//display gallery

function displayGallery(){

    for(let i=0; i<piray.length; i++){
        
        var card_box = document.createElement('div');
        card_box.classList.add("card-box");
        card_box.setAttribute("data-group", `${piray[i].group}`);        
        div_photo.appendChild(card_box);

        card_box.innerHTML = `
                <div class='img-holder'><img src='${piray[i].pics}'  alt='Slika' class='styimg'></div>
                <h4 class="name-holder">${piray[i].name}</h4>
                <p class="size-holder">${piray[i].size ? piray[i].size : ""}</p>
                    ${(piray[i].price==="") ? `<a href="usluge.html#porucivanje" class="price-holder uslink">vidi Poručivanje</a>` : `<p class="price-holder">${piray[i].price}<small>din</small>`}${piray[i].measure ? `<span><small>${piray[i].measure}</small></span>` : ""}</p>
                  
        `     
          
    }
}

if(document.getElementById('gallery-page')){
    displayGallery();
}

//filter galery
const filter_buttons = document.querySelectorAll(".filter-div button");
const filter_cards = document.querySelectorAll(".card-box");


function filterGallery(e){
    document.querySelector(".active").classList.remove('active');
    e.target.classList.add('active');

    for(i=0; i<filter_cards.length; i++){
        let card = filter_cards[i];
        card.classList.add('hide');

        if(card.dataset.group.includes(e.target.dataset.group)  || e.target.dataset.group === 'all'){
            card.classList.remove('hide');
        }
    }
}

for(i=0; i<filter_buttons.length; i++){
    filter_buttons[i].addEventListener("click", filterGallery);
}

