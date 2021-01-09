const express = require('express')
const path = require('path')
const app = express();
const axios = require('axios')

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));



const getCoordinates = async (query)=>{
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=geocodejson`);
    const [longitude, latitude] = res.data.features[0].geometry.coordinates;
    return [longitude, latitude];
}
// console.log(getCoordinates('texas'))

const getForecast = async (query) =>{
    [longitude, latitude] = await getCoordinates(query);
    const res = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`)
    const [city, state] = await [res.data.properties.relativeLocation.properties.city, res.data.properties.relativeLocation.properties.state];
    const forecastUrl = await res.data.properties.forecast;
    const weatherData = await axios.get(forecastUrl);
    const finalData = weatherData.data.properties.periods;
    return [finalData, city, state] ;
}





//index route
app.get('/index', async (req, res)=>{
    res.render('new')
})
//show route
app.get('/details/:city', async (req, res)=>{
    // const {city} = req.params;
    // const p =await getForecast(city);
    // console.log(p)
    // res.render('details',{p, city})
})
//post route
app.post('/index', async (req, res)=>{
    let {query} = req.body;
    let p = await getForecast(query);
    res.render('details',{p, getDate})
})


app.listen(3000, ()=>{ 
    console.log('app is listening')
})

const getDate = (d)=>{
    return d.slice(5, 10)
}