const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const EmailUser = document.getElementById("EmailUser")
async function emailValidationApi() {
    try {
        return await fetch(`https://api.eva.pingutil.com/email?email=${EmailUser.value}`, requestOptions)
            .then(response => response.json())
    }
    catch (err) {
    }
}
async function reactionToEmailValidation() {
    let response = await emailValidationApi();
    console.log(response.data.webmail);
    console.log(response.data.deliverable);
    console.log(response.data);
    if (response.data.webmail === true && response.data.deliverable === true) {
        return true
    } else {
        return false
    }

}
function actionOfPrintingUser() {
    return (
        window.location.href = "mailto:" + ('danielmalede@gmail.com')

    )
}
async function printingUserPage() {
    let check = await reactionToEmailValidation()
    if (check == true) {
        return actionOfPrintingUser()
    }
    else { return alert("Invalid Email") }
}
email_valid_btn.addEventListener("click", () => { printingUserPage() })