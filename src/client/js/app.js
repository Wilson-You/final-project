const apiKey = '2fc35ac5705b02cd344cf81ccb07494f';

const cityID = 2172797;

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=';

const url = (baseURL + cityID + '&appid=' + apiKey);

document.querySelector('#generate').addEventListener('click', autoFectchData);

function autoFectchData(e) {
    getApiData(url)
        .then(function (data) {
            console.log(data)
            postWeatherData('/postWeatherData', { 'date': new Date((data.dt) * 1000), 'temp': data.main.temp, 'feeling': document.getElementById('feelings').value })
            updateUI()
        })
}

const getApiData = async (url) => {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch {
        console.log("error", error);
    }
}
// The following function actually is not used in this program
const getWeatherData = async () => {
    const request = await fetch('/getWeatherData');
    try {
        const data = await request.json();
        console.log(data);

    } catch (error) {
        console.log('error', error);

    }
}

const postWeatherData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);

    }

}

const updateUI = async () => {
    const request = await fetch('/getWeatherData');
    try {
        const allWeatherData = await request.json();
        let date = new Date();
        document.getElementById('date').innerHTML = allWeatherData.date;
        document.getElementById('temp').innerHTML = allWeatherData.temp;
        document.getElementById('content').innerHTML = allWeatherData.feeling;

    } catch (error) {
        console.log("error", error);
    }
}

