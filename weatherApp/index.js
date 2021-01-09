const form = document.querySelector("#form");
const formBtn = document.querySelector("formBtn");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const inp = form.elements.query.value;
    getCoordinates(inp);
    getForecast(inp);
    form.elements.query.value = " ";
})

const getCoordinates = async (query)=>{
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=geocodejson`);
    const [longitude, latitude] = res.data.features[0].geometry.coordinates;
    return [longitude, latitude];
}
// getCoordinates("texas");

const getForecast = async (query) =>{
    [longitude, latitude] = await getCoordinates(query);
    const res = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`)
    const [city, state, date] = await [res.data.properties.relativeLocation.properties.city, res.data.properties.relativeLocation.properties.state,res.data];
    const forecastUrl = await res.data.properties.forecast;
    const weatherData = await axios.get(forecastUrl);
    const [detailedForecast, icon, name, shortForecast, startTime, temperature, windSpeed, periods] = await [weatherData.data.properties.periods[0].detailedForecast, weatherData.data.properties.periods[0].icon,weatherData.data.properties.periods[0].name, weatherData.data.properties.periods[0].shortForecast, weatherData.data.properties.periods[0].startTime , weatherData.data.properties.periods[0].temperature, weatherData.data.properties.periods[0].windSpeed, weatherData.data.properties.periods]
    console.log([detailedForecast, icon, name, shortForecast, startTime, temperature, windSpeed, periods])
    
    

    

    // looping over period
    for(let period in periods){
        const weatherList = document.querySelector("#weatherList");
        // adding forecast in list
        const markup = `
            <div id="weatherContainer">
                <div class="card_header">
                    <div class="name">
                        <div class="name_value">${name}</div>
                    </div>
                    <div class="date">${getDate(startTime)}</div>
                </div>
                <div class="card_content">
                    <div class="forecast_container">   
                        <div class="weather_icon">
                            <img src="${icon}" alt="Test">
                        </div>                                           
                        <div class="temperature">${temperature}&#186;</div>
                    </div>
                    <div class="detailed_weather">
                        <div class="weather_state">
                            <p>${detailedForecast}</p>                          
                        </div>
                    </div>
                </div>
            </div>
        `
        weatherList.insertAdjacentHTML("beforeend",markup);             
        const weatherListItem = document.createElement("div");
    }
}

const getDate = e => e.substring(5,10);


