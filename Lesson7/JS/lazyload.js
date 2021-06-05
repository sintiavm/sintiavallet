
//get all imgs with dataa -src atribute
const imagesToLoad = document.querySelectorAll("{.content}")
let imagesToLoad = document.querySelectorAll('img[.content]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('.content'));
  image.onload = () => {
    image.removeAttribute('.content');
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