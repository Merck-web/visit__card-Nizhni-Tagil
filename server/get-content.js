function sendGetRequest(method, URL) {
    const headers = {
        'Content-Type': 'application/json',

    };
    return fetch(URL).then(response => {
        return response.json()
    })
}

//GET ЗАПРОС
var GetRequest = null;

async function sendGetRequest(method, URL) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(URL).then(response => {
        return response.json()
    })
}
window.onload = async function () {
    GetRequest = await sendGetRequest('GET', 'http://127.0.0.1:8081/get-content')
    console.log(GetRequest)
    document.querySelector('.seaction__dedcription').innerHTML +=`<h2>${GetRequest[0].textContnet}</h2>`
}
sendGetRequest('GET','http://127.0.0.1:8081/get-content')
    .catch(err=>console.log(err))