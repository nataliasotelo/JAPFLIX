function fetchUrl(url) {
    let dataResponse = await fetch(url)
    let dataJson = await dataResponse.json()
    return dataJson
}

document.addEventListener("DOMContentLoaded", function () {
    moviesJsonUrl = "https://japceibal.github.io/japflix_api/movies-data.json"
    moviesJson = fetchUrl(moviesJsonUrl)
});

let buscar = document.getElementById("btnBuscar");

buscar.addEventListener("click", function(){
    
})

