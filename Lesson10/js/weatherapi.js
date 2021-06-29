const cityid ="5604473";
const APPID ="d9e0c4ec7e97714a178f177b3aff8cb9";


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then(response => {
    console.log(response);   
    document.getElementById('temparture').textContent=response.main.temp_max;
    
// let temperture = document.querySelector('#temperture');
 //  let weather = response.main.temp.toFixed(0);
  //  const currenly = document.querySelector('#currenly');
   // const desc = response.weather[0].description;
    //currenly.innerHTML = <stong>${desc.toUpperCase()</strong>;


      // images

    const imagesrc = 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png';  // note the concatenation
  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  }) 