const newAPI = `http://importmarvel.com/api/events?New%20item=`
async function getNewsApi() {
    try {
        return await fetch(`${API}`)
        .then(response => response.json()).then(response=>console.log(response))
    } catch (error) {
        
    }
}
console.log(getNewsApi()); 


