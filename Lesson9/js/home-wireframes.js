const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');
    

h2.textContent = towns[i].name + ' ' + towns[i].lastname;
p1.textContent = "Date of Birth:" + ' ' + towns[i].birthdate;
p2.textContent = "Place of Birth:" + ' ' + towns[i].birthplace;
image.setAttribute('src', images/${wheather2.photo});
card.setAttribute('class', "card");


card.appendChild(h2);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
  }
  });
  $(document).ready(function(){
    $('td').hover( function () {
    
     $(this).animate({opacity:'0'});
       },
    
        function () {
    
        $(this).animate({opacity:'0'});
        }); 
    });
    
    //get all imgs with dataa -src atribute
const imagesToLoad = document.querySelectorAll("{img}")
let imagesToLoad = document.querySelectorAll('img]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('img'));
  image.onload = () => {
    image.removeAttribute('.img');
  };
};
imagesToLoad.forEach((img) => {
    loadImages(img);
  });
  
  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  } 