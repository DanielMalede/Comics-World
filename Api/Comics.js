async function getComics() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "893c074667msh97f09d6735f705ap123714jsne428339ccc11",
      "X-RapidAPI-Host": "books39.p.rapidapi.com",
    },
  };
  try {
    loadingGif.innerHTML = `<img class="img-fluid" src="../photos/LoadingGif/loadingGif.gif" alt="">`;
    let respo = await fetch(
      "https://books39.p.rapidapi.com/CZFA4F/books",
      options
    );
    return respo.json();
  } catch (error) {
    loadingGif.innerHTML = `<img class="img-fluid" src="../photos/LoadingGif/dosentWork.gif" alt="">`;
  } finally {
    loadingGif.innerHTML = "";
  }
}
// console.log(getComics());
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
  `15.jpg`,
];
const urlComics = [
  "https://comiconlinefree.net/batman-no-man-s-land/issue-1",
  "https://comiconlinefree.net/van-helsing-50-anniversary-issue/issue-full/2",
  "https://comiconlinefree.net/nightwing-old-friends-new-enemies/issue-tpb",
  "https://comiconlinefree.net/superman-in-the-computer-masters-of-metropolis/issue-full",
  "https://comiconlinefree.net/what-if-spider-man-2018/issue-full",
  "https://comiconlinefree.net/hellboy-the-storm-and-the-fury/issue-tpb",
  "https://comiconlinefree.net/batman-blackgate/issue-full",
  "https://comiconlinefree.net/nocturne/issue-4",
  "https://comiconlinefree.net/batman-no-man-s-land/issue-1",
  "https://comiconlinefree.net/van-helsing-50-anniversary-issue/issue-full/2",
  "https://comiconlinefree.net/nightwing-old-friends-new-enemies/issue-tpb",
  "https://comiconlinefree.net/superman-in-the-computer-masters-of-metropolis/issue-full",
  "https://comiconlinefree.net/what-if-spider-man-2018/issue-full",
  "https://comiconlinefree.net/hellboy-the-storm-and-the-fury/issue-tpb",
  "https://comiconlinefree.net/batman-blackgate/issue-full",
  "https://comiconlinefree.net/nocturne/issue-4",
];
function printComics() {
  getComics().then((response) => {
    for (let i = 0; i < 15; i++) {
      ComicsBooks.innerHTML += `
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
                <a target="_blank" href="${urlComics[i]}">For The Comics Click Here</a>
                </div>
            </div>
        </div>
    </div>
    `;
    }
  });
}
