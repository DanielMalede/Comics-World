const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
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
    </div>`;
        })
    );
}
printusersinfo();
