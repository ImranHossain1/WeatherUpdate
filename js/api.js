const API_KEY = `ef182d0bcd4b516f9b689895ee3460a4`;
const searchTemperature =()=> {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayTemperature(data))
}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temp =>{
    console.log(temp)
    setInnerText('city', temp.name);
    setInnerText('temperature', temp.main.temp);
    setInnerText('weather', temp.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}