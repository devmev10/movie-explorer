


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
                console.log(item.imdbID)
                document.querySelector('main').innerHTML += `
                                                            <img src = ${item.Poster}>
                                                            <h2>${item.Title}</h2>
                                                            <span>${item.Year}</span>`
            }
            
        })
        

    


}

