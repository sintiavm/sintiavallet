const cityid = "3947322";
const APPID = "d8b4d6ca053785c88298e28b7fe8e164";


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then(response => {
    console.log(response);
    // document.getElementById('temparture').textContent=response.main.temp_max;

    let temperture = response.main.temp_max;
    let speed = response.wind.speed;
    const desc = response.weather[0].description;
    const des = response.main.humidity;


    document.getElementById('Currently').innerText = desc;
    document.getElementById('High').innerHTML = temperture + '&deg;F';
    document.getElementById('Humidity').innerHTML = des;
    document.getElementById('Speed').innerHTML = speed;

    // images

    //const imagesrc = 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png';  // note the concatenation
    // note how we reference the weather array
    //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);
  })



 