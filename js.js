function changeColor (){
    var letters = '0123456789ABCDEF'
    var color = "#"
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

document.querySelector('button').addEventListener('click', changeColor);