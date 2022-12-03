document.querySelector('button').addEventListener('click', findMovie)


function findMovie(){
    let title = document.querySelector('input').value
    
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=23eb338b`)
        .then(res => res.json())
        .then(data => {
            
            let arr = data.Search.splice(0,3)
          
            
            //Local Storage for movies which are added via clicking watchlist button
            document.querySelector('main').addEventListener('click', function(e){
                let target = e.target
                if(target.matches(`.${arr.imdbID}`)) {console.log(target)}
            })
            
            // Loop over the array of 3 movies and extract movie details
            for(item of arr){
                fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=23eb338b`)
                .then(response => response.json())
                .then(DATA => {
                    console.log(DATA)
                    let htmlContent = `<div >
                                            <img src = ${DATA.Poster}>
                                            <h2>${DATA.Title}</h2>
                                            <button class = ${DATA.imdbID} >Add to Watchlist</button>
                                            <span>${DATA.imdbRating}</span>
                                            <span>${DATA.Runtime}</span>
                                            <span>${DATA.Genre}</span>
                                            <span>${DATA.Plot}</span>
                                            <span>${DATA.Year}</span>
                                        </div>`
                                        
                    filmList.push(htmlContent)
                    
                    //Render movie details into HTML
                    document.querySelector('main').innerHTML += htmlContent                    
                })          
             }
            
        })
}

