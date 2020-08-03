// getGeoInfo function starts the whole process of collecting API data from third parties
// 

document.addEventListener('DOMContentLoaded', installEventListener);
function installEventListener() {
    document.querySelector('#go').addEventListener('click', getGeoInfo);
}

// getGeoInfo function starts the whole process of collecting API data from third parties

export function getGeoInfo() {

    // Get the city name, start date and end date as well as setting other variables

    let cityName = document.querySelector('#city').value
    let date_start = document.querySelector('#date').value
    let date_end = document.querySelector('#dateend').value

    const geoKey = 'wilsonyou'

    const geoBaseUrl = 'http://api.geonames.org/searchJSON'

    let geoURL = `${geoBaseUrl}?q=${cityName}&maxRows=10&username=${geoKey}`

    const weatherBitKey = '7cf6ed38ae2148f1b6c4f7c5f4800e3d'

    const weatherBitUrl = 'http://api.weatherbit.io/v2.0/forecast/daily'

    let bitURL = `${weatherBitUrl}?city=${cityName}&key=${weatherBitKey}`

    const pixKey = '17198963-812b30f1b4baff708364953dc'

    const pixBaseUrl = 'https://pixabay.com/api/'

    let pixURL = `${pixBaseUrl}?key=${pixKey}&q=${cityName}`

    // Fetch geo data from third party
    fetch(geoURL)
        .then(res => res.json())
        .then(data => {
            console.log("geoURL", data)
            let name = data.geonames[0].name + ', ' + data.geonames[0].countryName;

            document.querySelector('#dest').innerHTML = "Destination: " + name
            localStorage.setItem('name', name);
            name = localStorage.getItem('name');

        })
    // Fetch weather data and set element values
    fetch(bitURL)
        .then(res => res.json())
        .then(data => {
            console.log("bitURL", data)
            let description = [];
            let temp = "";
            let datestart = new Date(date_start);
            let dateend = new Date(date_end);
            let difference_time = dateend.getTime() - datestart.getTime();
            let highAndLow = [];
            let total_days = difference_time / (1000 * 3600 * 24);
            let countRain = 0;
            let countClouds = 0;
            let countClear = 0;
            for (let i = 0; i < data.data.length; i++) {

                if (date_start <= data.data[i].datetime && data.data[i].datetime <= date_end) {
                    description.push(data.data[i].weather.description);
                    // description = [...new Set(description)];

                    highAndLow.push(parseFloat(data.data[i].max_temp));
                    highAndLow.push(parseFloat(data.data[i].min_temp));
                    highAndLow = highAndLow.sort((a, b) => a - b);
                    console.log(highAndLow);

                }
            }


            temp = highAndLow[0] + '~' + highAndLow[highAndLow.length - 1] + '℃';

            description = description.toString();

            for (let i = 0; i < description.length; i++) {
                if (description.includes('rain')) {
                    countRain++;
                } else if (description.includes('clouds')) {
                    countClouds++;
                } else if (description.includes('Clear')) {
                    countClear++;
                }
            }

            if (countRain > countClouds && countClouds > countClear) {
                description = 'Rains a lot';
            } else if (countRain < countClouds && countClouds < countClear) {
                description = 'Mostly clear sky';
            } else if (countRain < countClouds && countClouds > countClear) {
                description = 'Mostly cloudy';
            } else if (countRain == countClouds && countClouds > countClear) {
                description = 'Cloudy and rainy with some clear skys';
            } else if (countRain < countClouds && countClouds == countClear) {
                description = 'Mostly clear skys and cloudy with some rain';
            } else if (countRain > countClouds && countClouds == countClear) {
                description = 'Mostly rainy with some clouds and clear skys';
            } else if (countRain == countClouds && countClouds == countClear) {
                description = 'Rainly, runny and clear skys';
            }

            document.querySelector('#describe').innerHTML = "Weather: " + description
            document.querySelector('#temp').innerHTML = "Temperatures: " + temp
            document.querySelector('#datetime').innerHTML = "Start date: " + date_start
            document.querySelector("#length").innerHTML = "Your trip is " + total_days + " days long"

        }
        )
    // Fetch images from web

    fetch(pixURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let randompic = Math.floor(Math.random() * data.hits.length);
            console.log(randompic);
            document.querySelector('#img1').innerHTML = `<img src='${data.hits[randompic].webformatURL}'>`;
        }
        )

}

export function allDone(date_start) {
    console.log("Everyting is done since code executed")

}
