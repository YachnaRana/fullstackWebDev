
const form = document.querySelector('#form');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const inp =  form.elements.query.value;
    const config = { params: {q: inp} }
    const res =  await axios.get(`http://api.tvmaze.com/search/shows`, config);
    const data = res.data;
    makeImg(data);
    form.elements.query.value = " ";
});

const makeImg = (movies)=>{
    for(let movie of movies){
        if(movie.show.image){
            const img = document.createElement('IMG');
            img.src = movie.show.image.medium;
            document.body.append(img)
        }
    }
}


