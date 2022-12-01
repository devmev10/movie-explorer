


document.querySelector('button').addEventListener('click', findMovie)

function findMovie(){
    let title = document.querySelector('input').value
    console.log(title)
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=23eb338b`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let arr = data.Search.splice(0,3)
            
            
            for(item of arr){
                fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=23eb338b`)
                .then(response => response.json())
                .then(DATA => {
                    console.log(DATA)
                    document.querySelector('main').innerHTML += `
                                                            <img src = ${DATA.Poster}>
                                                            <h2>${DATA.Title}</h2>
                                                            <span>${DATA.Year}</span>
                                                            <span>${DATA.imdbRating}</span>
                                                            `
                })
                
                
            }
            
        })
        

    


}

