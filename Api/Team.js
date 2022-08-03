const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
const testAPI = `https://app.reviewapi.io/api/v1/reviews?apikey=590557d0-1362-11ed-8a16-6fb669d00464&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15
`
let teamCard = document.getElementById("teamCard");
async function getUsers() {
    try {
        // loading.innerHTML = `<img src="../images/GifLoad/loading.gif" alt="">`;
        return await fetch(API).then((response) => response.json());
    } catch (error) {
    } finally {
        loading.innerHTML = "";
    }
}
let counter = 50
function printusersinfo() {
    getUsers().then((response) =>
        response.forEach((item) => {
            teamCard.innerHTML += `
    <div class="card mb-5" style="width: 18rem;">
    <img class="card-img-top" style="box-shadow: 0px 8px 10px black;" src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg">
      <div class="card-body">
        <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Age: ${item.age}</li>
        <li class="list-group-item">Email: ${item.email}</li>
        <li class="list-group-item">Phone: ${item.phone}</li>
      </ul>
    </div>
    <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>

<section>
  <div class="row text-center">
    <div class="col-md-6 mb-4 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"
          class="rounded-circle shadow-1-strong" width="100" height="100" />
      </div>
      <p class="lead my-3 text-muted">
        "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
        perspiciatis unde omnis."
      </p>
      <p class="font-italic font-weight-normal mb-0">- ${item.name.first} ${item.name.last}</p>
    </div>
  </div>
</section>
    `;
        })
    );
}
printusersinfo();

async function getUserss() {
  try {
      return await fetch(testAPI).then((response) => response.json());
  } catch (error) {
  } finally {
      loading.innerHTML = "";
  }
}
console.log(getUserss());