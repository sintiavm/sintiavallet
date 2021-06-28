const cityid ="2172797";
const APPID ="04fbb28070e1f562e0432426b3a0a265";


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&unit=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperture = document.querySelector('#temperture');
    temperture.textContent = jsObject.main.temp.tofixef(0);
    const currenly = document.querySelector('#currenly');
    const desc = jsObject.weather[0].description;
    currenly.innerHTML = <stong>${desc.toUpperCase()</stong>;


      // images

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  }); 