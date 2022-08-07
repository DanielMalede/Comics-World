const api = `https://api.openweathermap.org/data/2.5/weather?q=TEL-AVIV&appid=85470bd4ed69b1bdaae5b623c875c6d7`

async function getWeather() {
    try {
        wetherIcon.innerHTML= `<img style=width:8vh src="./photos/LoadingGif/sun.gif" alt="">`
        return await fetch(`${api}`).then(response => response.json())

    }
    catch (err) {

    }
}

function printWeather() {
    getWeather().then(response => {
        for (const key in response) {
            wetherIcon.innerHTML =
                `${response['name']}
                <br>
                <b>${Math.floor(response['main']['temp']) / 9.5}</b> ℃
                `

        }

    })
}
printWeather()