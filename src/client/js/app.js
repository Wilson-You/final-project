
document.querySelector('#go').addEventListener('click', getGeoInfo);


export function getGeoInfo() {

    let cityName = document.querySelector('#city').value
    let date = document.querySelector('#date').value

    const geoKey = 'wilsonyou'

    const geoBaseUrl = 'http://api.geonames.org/searchJSON'

    let geoURL = `${geoBaseUrl}?q=${cityName}&maxRows=10&username=${geoKey}`

    const weatherBitKey = '7cf6ed38ae2148f1b6c4f7c5f4800e3d'

    const weatherBitUrl = 'http://api.weatherbit.io/v2.0/forecast/daily'

    let bitURL = `${weatherBitUrl}?city=${cityName}&key=${weatherBitKey}`

    const pixKey = '17198963-812b30f1b4baff708364953dc'

    const pixBaseUrl = 'https://pixabay.com/api/'

    let pixURL = `${pixBaseUrl}?key=${pixKey}&q=${cityName}`

    fetch(geoURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#dest').innerHTML = data.geonames[0].name
        })

    fetch(bitURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let description = ""
            let temp = ""
            for (let i = 0; i < 16; i++) {
                if (date == data.data[i].datetime) {
                    description = data.data[i].weather.description
                    temp = data.data[i].temp + '℃'
                }
            }

            document.querySelector('#describe').innerHTML = description
            document.querySelector('#temp').innerHTML = temp
            document.querySelector('#datetime').innerHTML = date


        }
        )
    fetch(pixURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#img1').innerHTML = `<img src='${data.hits[0].webformatURL}'>`
        }
        )

}

// export function getGeoInfo() {
//     const geoInfoData = async (geoURL) => {
//         const response = await fetch(geoURL);
//         try {
//             const geoData = await response.json();
//             console.log(geoData);
//             return geoData;
//         } catch {
//             console.log("error", error);
//         }
//     }
// }

// export function getFutureWeatherData() {
//     const weatherBitData = async (bitURL) => {
//         const response = await fetch(bitURL);
//         try {
//             const weatherData = await response.json();
//             console.log(weatherData);
//             return weatherData;
//         } catch {
//             console.log("error", error);
//         }
//     }
// }

// export function getPixData() {
//     const pixBayData = async (pixURL) => {
//         const response = await fetch(pixURL);
//         try {
//             const pixData = await response.json();
//             console.log(pixData);
//             return pixData;
//         } catch {
//             console.log("error", error);
//         }
//     }
// }


