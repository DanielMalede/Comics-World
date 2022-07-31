async function getComics() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '893c074667msh97f09d6735f705ap123714jsne428339ccc11',
            'X-RapidAPI-Host': 'books39.p.rapidapi.com'
        }
    };
    
    fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    }
console.log(getComics());

// function printComics() {
//     getComics().then((response)=>
//     response.)
// }