const API ='https://www.superheroapi.com/api.php/10217582256187832/search'
const searchHEROES = document.getElementById("searchHEROES")
async function getdetails() { 
    try {

      lodingSpiderman.innerHTML = `<img class="img-fluid" src="../photos/LoadingGif/loadingGif.gif" alt="">`
       return  await fetch(`${API}/${searchHEROES.value}`).then(response => response.json())
    } 
    catch (error) {
      loadingGif.innerHTML = `<img class="img-fluid" src="../photos/LoadingGif/dosentWork.gif" alt="">`
    }   
    finally{
      lodingSpiderman.innerHTML = ""
        }
}
// getdetails().then(data=>console.log(data))
// console.log(getdetails());
function printSuperHeroes() {
    // console.log(API);
    getdetails().then((response)=>
    response.results.forEach(item => {
        supercard.innerHTML+=      
`<div class="col wrapper d-flex align-items-center justify-content-center p-0">
  <div class="card">
    <div class="img-container position-relative w-100 h-100">
        <img src="${item.image.url}"?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">          
        <img src="${item.image.url}"?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </div>
    <div class="box w-100 position-absolute d-flex align-items-center justify-content-center">
        <div class="inner-content d-flex flex-column align-content-center justify-content-center">
          <span>${item.name}</span>
          <span>${item.work.occupation}</span>
          <span> Base: ${item.work.base}.</span>
          <h2>PowerState</h2>
          <span>Combat : ${item.powerstats.combat}</span>
          <span>durability : ${item.powerstats.durability}</span>
          <span>intelligence : ${item.powerstats.intelligence}</span>
          <span>power : ${item.powerstats.power}</span>
          <span>speed : ${item.powerstats.speed}</span>
          <span>strength : ${item.powerstats.strength}</span>
        </div>
    </div>
  </div>
</div>`
    })
    )
}
// printSuperHeroes()

function printEachSuperHero() {
  supercard.innerHTML= ""
    printSuperHeroes()
    
}

// async function sommee() {
//   try {
//     return await fetch(`https://comicvine.gamespot.com/api/characters/?api_key=82b9ea1c57ea97c73889c8b1c972beca415275c0&filter=publisher:marvel&limit=100&offset=0&format=json`)
//     .then(response=>response.json())
//   } catch (error) {
    
//   }
// }
// console.log(sommee().then());































// const encodedParams = new URLSearchParams();
// encodedParams.append("publicKey", "<REQUIRED>");
// encodedParams.append("eventId", "<REQUIRED>");
// encodedParams.append("privateKey", "<REQUIRED>");

// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': '893c074667msh97f09d6735f705ap123714jsne428339ccc11',
//         'X-RapidAPI-Host': 'Marvelstefan-skliarovV1.p.rapidapi.com'
//     },
//     body: encodedParams
// };
// async function get() {
    
//     try {
//         return await
        
//         fetch('https://marvelstefan-skliarovv1.p.rapidapi.com/getComicsByEvent', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
        
//     } catch (error) {
        
//     }
// }
// get()