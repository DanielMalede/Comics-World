// async function getreviews() {
//     try {
//       return await fetch('https://app.reviewapi.io/api/v1/reviews?apikey=8afe1c50-157f-11ed-992a-6720d73ba6af&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee%20&amount=15    ')
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     } catch (error) {
      
//     }
//   }
// // getreviews().then(data=>console.log(data.reviews));

//   function printReviews() {
//     getreviews().then(response=>
//         response.reviews.forEach(item => {
//             console.log( item)
//         }))
//   }
//   printReviews()