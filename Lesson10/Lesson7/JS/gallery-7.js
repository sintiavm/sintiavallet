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
  function toggleMenu()  {
    console.log(document.getElementById("newNav").classList)
    document.getElementById("newNav").classList.toggle("hide");
}
let updateLast = document.lastModified
document.getElementById('lastUpdate').innerHTML = updateLast
let fullYear = new Date().getFullYear();
document.getElementById("year").innerHTML = fullYear;

function toggleMenu()  {
  console.log(document.getElementById("newNav").classList)
  document.getElementById("newNav").classList.toggle("hide");
}