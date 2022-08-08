const button = document.getElementById('button')

button.addEventListener('click', (e)=>{
    let photo = document.createElement('img');
    photo.src = "img/photo.jpg";
    const body = document.getElementById('body');
    body.appendChild(photo);
    photo.style.animation ='5s show'
})