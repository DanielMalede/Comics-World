async function getreviews() {
  try {
    return await fetch(
      "https://app.reviewapi.io/api/v1/reviews?apikey=b7200750-17f9-11ed-a6b8-7bb18d600c95&url=https%3A%2F%2Fwww.healthgrades.com%2Fdentist%2Fdr-alexander-milman-yvqbl&amount=12"
    )
      .then((response) => response.json())
      // .then(response => console.log(response))
      .catch((err) => console.error(err));
  } catch (error) {}
}
function printReview() {
  getreviews().then((item) => {
    item.reviews.forEach((element) => {
      console.log(element.text);
    });
  });
}
