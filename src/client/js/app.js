const geoKey = 'wilsonyou'

const geoURL = 'http://api.geonames.org/searchJSON'

let cityName = 'newyork'

let geoURL = `${geoURL}?q=${cityName}&maxRows=10&username=${geoKey}`

const weatherBitKey = '7cf6ed38ae2148f1b6c4f7c5f4800e3d'

const weatherBitURL = 'http://api.weatherbit.io/v2.0/forecast/daily'

// const cityName = 'Raleigh,NC'

let bitURL = `${weatherBitKey}?city=${cityName}&key=${weatherBitURL}`

const pixKey = '17198963-812b30f1b4baff708364953dc'

const pixURL = 'https://pixabay.com/api/'

let pixURL = `${pixURL}?key=${pixKey}&q=${cityName}`

document.querySelector('#go').addEventListener('click', autoFectchData);

function autoFectchData(e) {
    getGeoInfo(geoURL)
        .then(function (data) {
            console.log(data)
            // postWeatherData('/postWeatherData', { 'date': new Date((data.dt) * 1000), 'temp': data.main.temp, 'feeling': document.getElementById('feelings').value })
            // updateUI()
        })
}

export function getGeoInfo() {
    const geoInfoData = async (geoURL) => {
        const response = await fetch(geoURL);
        try {
            const geoData = await response.json();
            console.log(geoData);
            return geoData;
        } catch {
            console.log("error", error);
        }
    }
}

export function getFutureWeatherData() {
    const weatherBitData = async (bitURL) => {
        const response = await fetch(bitURL);
        try {
            const weatherData = await response.json();
            console.log(weatherData);
            return weatherData;
        } catch {
            console.log("error", error);
        }
    }
}

export function getPixData() {
    const pixBayData = async (pixURL) => {
        const response = await fetch(pixURL);
        try {
            const pixData = await response.json();
            console.log(pixData);
            return pixData;
        } catch {
            console.log("error", error);
        }
    }
}

