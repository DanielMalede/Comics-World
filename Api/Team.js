const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
const testAPI = `https://app.reviewapi.io/api/v1/reviews?apikey=590557d0-1362-11ed-8a16-6fb669d00464&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15
`
let teamCard = document.getElementById("teamCard");
async function getUsers() {
    try {
      loadingReviews.innerHTML = `<img class="img-fluid" src="../photos/LoadingGif/loadingGif.gif" alt="">`
      return await fetch(API).then((response) => response.json());
    } catch (error) {
    } finally {
      loadingReviews.innerHTML = "";
    }
}

let counter = 45
function printusersinfo() {
    getUsers().then((response) =>
        response.forEach((item) => {
            teamCard.innerHTML += `
<div class=" text-center mt-5">
<div class="col">
  <div class="cardReviews card">
    <div class=" card-body py-4 mt-2">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"
          class="rounded-circle shadow-1-strong" width="100" height="100" />
      </div>
      <h5 class="font-weight-bold">- ${item.name.first} ${item.name.last}</h5>
      <ul class="list-unstyled d-flex justify-content-center">
        <li>
          <i class="fas fa-star fa-sm text-info"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-info"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-info"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-info"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-info"></i>
        </li>
      </ul>
      <p id="reviewsApi" class="mb-2">
      Some Text.....
      </p>
    </div>
  </div>
</div>
`;
        })
    );
}


// async function getUserss() {
//   try {
//       return await fetch(testAPI).then((response) => response.json());
//   } catch (error) {
//   } finally {
//       loading.innerHTML = "";
//   }
// }
// console.log(getUserss());

