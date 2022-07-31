async function getComics() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '893c074667msh97f09d6735f705ap123714jsne428339ccc11',
            'X-RapidAPI-Host': 'books39.p.rapidapi.com'
        }
    };
 let respo=await fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
return respo.json();
}

const imgComics = [
    `1.jpg`,
    `2.jpg`,
    `3.jpg`,
    `4.jpg`,
    `5.jpg`,
    `6.jpg`,
    `7.jpg`,
    `8.jpg`,
    `9.jpg`,
    `10.jpg`,
    `11.jpg`,
    `12.jpg`,
    `13.jpg`,
    `14.jpg`,
    `15.jpg`
]

function printComics() {
getComics().then((response)=>{
    for (let i = 0; i < 15; i++) {
        ComicsBooks.innerHTML +=
        `
    <div class="card-deck col-md-3 col-sm-12  pt-5 pb-5">
        <div class="">
            <div class="card">
                <div class="view overlay">
                    <img class="card-img-top" src="../photos/Comics/${imgComics[i]}"alt="Card image cap">
                </div>
                <div class="card-body">
                <h4>Author: ${response[i].AUTHOR}</h4>
                <p class="card-text">Language: ${response[i].LANG}</p>
                <p class="card-text">Publisher: ${response[i].PUBLISHER}</p>
                <p class="card-text">Publisher City: ${response[i].PUBLISHER_CITY}</p>
                <p class="card-text">Year: ${response[i].YEAR}</p>
                </div>
            </div>
        </div>
    </div>
    `            
    }
}
)
}
// printComics()