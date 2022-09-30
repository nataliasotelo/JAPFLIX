let moviesJsonUrl = "https://japceibal.github.io/japflix_api/movies-data.json"
let buscar = document.getElementById("btnBuscar");
let input = document.getElementById("inputBuscar").value.toLocaleLowerCase();

let arrayMovies = []
let filteredMovies = []


async function fetchData(url) {
    let moviesResponse = await fetch(url)
    let moviesJson = await moviesResponse.json()
    return moviesJson
}

document.addEventListener("DOMContentLoaded",async function () {
   arrayMovies = await fetchData(moviesJsonUrl)

   buscar.addEventListener("click", function(){
    let input = document.getElementById("inputBuscar").value.toLocaleLowerCase();
    filteredMovies = arrayMovies.filter(
           ({title, genres, tagline, overview }) =>
        title.toLocaleLowerCase().includes(input) ||
        genres.some(({name}) => name.toLocaleLowerCase().includes(input)) ||
        tagline.toLocaleLowerCase().includes(input) ||
         overview.toLocaleLowerCase().includes(input)
     )
     showMovies(filteredMovies)
   })

})



function showMovies(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let movie = array[i];

        htmlContentToAppend += `
        <li
        class="d-flex justify-content-between text-white"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
        onclick="showMoreData(${movie.id})"
      >
        <div>
          <h5>${movie.title}</h5>
          <p class="text-secondary fst-italic">${movie.tagline}</p>
        </div>
        <div>`
          let score = Math.round(movie.vote_average / 2)
                        for (let j = 0; j < 5; j++){
                            if (j <=score - 1)
                                htmlContentToAppend += `<span class="fa fa-star checked"></span>`
                            else 
                                htmlContentToAppend+= `<span class="fa fa-star"></span>`
                        }
        htmlContentToAppend+= `</div>
      </li>
        `
        document.getElementById("lista").innerHTML = htmlContentToAppend;    }
    }


    const showMoreData = (movieID) => {
        const movie = filteredMovies.find(({id}) => id === movieID);
        if (movie){
            document.getElementById("offCanvasTopLabel").innerText = movie.title;
            document.getElementById("offCanvasBody").innerText = movie.overview;
            //document.getElementById("year").innerText = movie.release_date;
        }
    }
    

    // agregar hr, generos y  menu desplegable
    





