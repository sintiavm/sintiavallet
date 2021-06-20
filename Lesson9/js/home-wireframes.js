const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);
    // temporary checking for valid response and data parsing




    for (let i = 0; i < towns.length; i++) {
      if(towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs' || towns[i].name == 'Preston'){

      


      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let image = document.createElement('img');


      card.className = "town-card" + i;
      h3.textContent = towns[i].name;
      h4.textContent = towns[i].motto;
      p1.textContent = "Year Founded:" + ' ' + towns[i].yearFounded;
      p2.textContent = "Population:" + ' ' + towns[i].currentPopulation;
      p3.textContent = "Anual Rainfall:" + ' ' + towns[i].averageRainfall;
      image.setAttribute('src', 'images/' + towns[i].photo);
      image.apphend = towns[i].photo;
      card.setAttribute('class', "card");


      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(image);
      card.appendChild(image);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
    }
  });
