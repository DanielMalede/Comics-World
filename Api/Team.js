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
const Reviews = [
  `This site definitely  appeals to the average person because the layout
  is so  simple  but very  VERY  effective.  It is a clean  site  with a
  flawless  look, and someone  without any  technical  background  would
  definitely  appreciate  it.  The layout makes anyone feel  comfortable
  because it is so well done and clean  looking.  You feel as if you are
  in good hands and you know that you will be able to find  anything you
  need on this site.`,
  `The design is very  professional and well done.  I love the washed-out
  image of the  globe on the left  behind  the  links.  The  site  feels
  great.  I suggest  that you change the fonts to Arial, a more  rounded
  font, to go with the professional feel of the site.  There are minimum
  graphics,  and the  graphics  there are small  and  fast-loading.  The
  colors of the images go together nicely.`,

  `It is easy to navigate  this site  because  all of the links are right
  there on the left hand side, and people without image-loading browsers
  can access the links via the text at the  bottom  which is very  handy
  and essential  for a good site.  It is a good idea having a highlights
  section  right in the middle of the screen  because it is obvious, and
  all important information can be accessed by the reader easily.`,

  `The two color  scheme is good but try adding  one or two more  colors.
  Orange/yellow  and blue go well  together, and the purple color of the
  accessed links is nice.  Maybe a turquoise  color  somewhere  would be
  good.  The  content  flows very well and is well  written.  All of the
  information is in the appropriate  place.  The only thing with content
  is the amount of it on the front page!  Try cutting down a lot of that
  information and placing the cut out bits in the About Us section.  All
  you need on the front page is some interesting  information to get the
  viewer in.`,

  `The design is very  consistent  throughout all of the pages- clean and
  easy to read.  Well done!`,

  `The load time of the page is quite  fast,  even with the  moving  link
  buttons.  I did not find any typos or broken  links,  just  very  well
  written  information!  There are  sufficient  meta tags on the  pages.
  The  CharityFocus  logo is present on the main page but not on the sub
  pages.  Overall a great site with not only great design but  excellent
  content as well.  Great job to everyone involved.`,

  `This site  would  appeal to the  average  person in the way that it is
  very simply  done, and  everything  is very easy to find.  There is no
  messing  around  here, just the  information  that they want to convey
  presented in the simplest way possible.  People with no technical back
  ground  would  definitely   appreciate  the  simplicity  and  ease  of
  navigation in this site.`,

  `The layout is very  clean,  but also kind of bland.  It makes you feel
  comfortable  with the site  because  you  don't  feel  overwhelmed  by
  information, but the  presentation of the site needs to be worked on a
  bit more.`,

  `The design is  classic-  but like I said  before a bit too bland.  You
  should  think about  adding more  colors and  graphics  to the site to
  liven it up a bit.  Perhaps make the link buttons move or light up, or
  have some kind of  animation  on the page.  Perhaps you could  animate
  the site logo!`,

  `It is extremely  easy to navigate  this site  because all of the links
  are right there on the left,  which is  excellent.  One thing with the
  navigation is you should have an alternative  form of getting  around.
  If someone has a browser  which  doesn't  load  graphics,  it would be
  difficult  for them to get around  this site, so you  should  have the
  links in text form at the  bottom of the page.  Other  than  that, the
  navigation is perfect!`,

]
function printusersinfo() {
  getUsers().then((response) =>
    response.forEach((item, index) => {
      teamCard.innerHTML += `
            <div class="col mb-5 mt-5 d-flex align-items-stretch">
              <div class="card testimonial-card">
                <div class="card-up" style="background-color: #9d789b;"></div>
                  <div class="avatar mx-auto bg-white">
                    <img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"class="rounded-circle pt-5 img-fluid" />
                  </div>
                <div class="card-body">
                  <h4 class="mb-4">- ${item.name.first} ${item.name.last}</h4>
                  <hr />
                  <p class="dark-grey-text mt-4">
                    <i id="reviewsRandom" class="fas fa-quote-left pe-2"></i>${Reviews[index]}</p>
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
function printReviews() {
  getreviews().then(response =>
    response.reviews.forEach(item => {
      reviewsRandom +=
        `
        ${item}
        `
    }))
}

