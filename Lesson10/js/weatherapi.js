const cityid ="2172797";
const APPID ="04fbb28070e1f562e0432426b3a0a265";


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&unit=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  }); 