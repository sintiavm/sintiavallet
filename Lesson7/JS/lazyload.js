
//get all imgs with dataa -src atribute
const iamgesToLoad = document.querySelectorAll("{.content}")
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
  