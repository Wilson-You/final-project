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
            console.log(data)
            let name = data.geonames[0].name

            document.querySelector('#dest').innerHTML = "Destination: " + name
            localStorage.setItem('name', name);
            name = localStorage.getItem('name');


        })
    // Fetch weather data and set element values
    fetch(bitURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let description = ""
            let temp = ""
            let datestart = new Date(date_start);
            let dateend = new Date(date_end);
            let difference_time = dateend.getTime() - datestart.getTime();
            let total_days = difference_time / (1000 * 3600 * 24);

            for (let i = 0; i < 16; i++) {
                if (date_start == data.data[i].datetime) {
                    description = data.data[i].weather.description
                    temp = data.data[i].temp + '℃'
                }
            }

            document.querySelector('#describe').innerHTML = "Weather: " + description
            document.querySelector('#temp').innerHTML = "Current temp: " + temp
            document.querySelector('#datetime').innerHTML = "Current date: " + date_start
            document.querySelector("#length").innerHTML = "Your trip is " + total_days + " days"

        }
        )
    // Fetch images from web

    fetch(pixURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#img1').innerHTML = `<img src='${data.hits[0].webformatURL}'>`
        }
        )

}

export function allDone(date_start) {
    console.log("Everyting is done since code executed")

}
