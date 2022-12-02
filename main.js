


document.querySelector('button').addEventListener('click', findMovie)

function findMovie(){
    let title = document.querySelector('input').value
    
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=23eb338b`)
        .then(res => res.json())
        .then(data => {
            
            let arr = data.Search.splice(0,3)
            
            // Loop over the array of 3 movies and extract movie details
            for(item of arr){
                fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=23eb338b`)
                .then(response => response.json())
                .then(DATA => {
                    
                    let htmlContent = `<img src = ${DATA.Poster}>
                    <h2>${DATA.Title}</h2>
                    <span>${DATA.imdbRating}</span>
                    <span>${DATA.Runtime}</span>
                    <span>${DATA.Genre}</span>
                    <span>${DATA.Plot}</span>
                    <span>${DATA.Year}</span>`
                    
                    //Render movie details into HTML
                    document.querySelector('main').innerHTML += htmlContent

                    
                })

                //Local Storage for movies which are added via clicking watchlist button
                
            
                
                
            }
            
        })
        

    


}

