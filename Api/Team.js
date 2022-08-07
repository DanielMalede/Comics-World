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

let counter = 11
function printusersinfo() {
    getUsers().then((response) =>
        response.forEach((item) => {
            teamCard.innerHTML += `


<div class="col mb-5 mt-5 d-flex align-items-stretch">
<div class="card testimonial-card">
  <div class="card-up" style="background-color: #9d789b;"></div>
  <div class="avatar mx-auto bg-white">
    <img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"
      class="rounded-circle img-fluid" />
  </div>
  <div class="card-body">
    <h4 class="mb-4">- ${item.name.first} ${item.name.last}</h4>
    <hr />
    <p class="dark-grey-text mt-4">
      <i id="reviewsRandom" class="fas fa-quote-left pe-2"></i>Lorem ipl;mdfklmbkldfmklbmdpv svpsmvp lkpmdfp mdpmvp kmepkmepsum dolor sit amet eos adipisci,
      consectetur adipisicing elit.
    </p>
  </div>
</div>
</div>
`;
        })
    );
}

async function getreviews() {
  try {
    return await fetch('https://app.reviewapi.io/api/v1/reviews?apikey=8afe1c50-157f-11ed-992a-6720d73ba6af&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  } catch (error) {
    
  }
}
getreviews()
getreviews(); 
 function printReviews() {
  getreviews().then(response=>
      response.reviews.forEach(item => {
        reviewsRandom+=
        `
        ${item}
        `
      }))
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

