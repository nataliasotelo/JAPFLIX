let moviesJsonUrl = "https://japceibal.github.io/japflix_api/movies-data.json"
let buscar = document.getElementById("btnBuscar");
let input = document.getElementById("inputBuscar").value.toLocaleLowerCase();

var getJSONData = function (url) {
    var result = {};
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(function (response) {
        result.status = "ok";
        result.data = response;
        return result;
      })
      .catch(function (error) {
        result.status = "error";
        result.data = error;
        return result;
      });
  };

document.addEventListener("DOMContentLoaded", function () {
   
    getJSONData(moviesJsonUrl).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)
            let genres = resultObj.data.genres;
        }
    });

    
    buscar.addEventListener("click", function(){
        moviesJson.filter(
            ({title, genres, tagline, }) =>
            title.toLocaleLowerCase().includes(input) )
    
    })



});



