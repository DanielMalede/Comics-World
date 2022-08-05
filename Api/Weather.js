const api = `https://api.openweathermap.org/data/2.5/weather?q=TEL-AVIV&appid=85470bd4ed69b1bdaae5b623c875c6d7`

async function getWeather() {
    try {
        return await fetch(`${api}`).then(response => response.json())

    }
    catch (err) {

    }
}
console.log(getWeather());

function printWeather() {
    // getWeather().then(response =>
    // response.forEach(item => {
    Weather.innerHTML =
        //     }))
        `

            `
}
printWeather()