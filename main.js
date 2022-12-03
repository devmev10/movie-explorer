document.querySelector('button').addEventListener('click', findMovie)
let movieArray = []
let myClass

function findMovie(){
    let title = document.querySelector('input').value
    
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=23eb338b`)
        .then(res => res.json())
        .then(data => {
            
            let arr = data.Search.splice(0,3)
          
            
            //Local Storage for movies which are added via clicking watchlist button
            document.querySelector('main').addEventListener('click', function(e){
                let target = e.target
                if(target.id === movieArray.myClass){}//Extract the whole object and display on div}
                
                
            })
            
            // Loop over the array of 3 movies and extract movie details
            for(item of arr){
                fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=23eb338b`)
                .then(response => response.json())
                .then(DATA => {
                   
                    myClass = item.imdbID
                   
                    let htmlContent = `<div class = ${myClass}>
                                            <img src = ${DATA.Poster}>
                                            <h2>${DATA.Title}</h2>
                                            <button id = ${DATA.imdbID} >Add to Watchlist</button>
                                            <span>${DATA.imdbRating}</span>
                                            <span>${DATA.Runtime}</span>
                                            <span>${DATA.Genre}</span>S
                                            <span>${DATA.Plot}</span>
                                            <span>${DATA.Year}</span>
                                        </div>`
                                        
                    
                    movieArray.push({
                        myClass: {
                            poster: DATA.Poster,
                            title: DATA.Title,
                            ID: DATA.imdbID,
                            imdbRating: DATA.imdbRating,
                            runTime: DATA.Runtime,
                            genre: DATA.Genre,
                            plot: DATA.Plot,
                            year: DATA.Year
                        }
                    }) 
                    //Render movie details into HTML
                    document.querySelector('main').innerHTML += htmlContent                    
                })          
             }
            
        })
        console.log(movieArray)
}

