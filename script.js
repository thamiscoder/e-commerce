let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
    nextImage();
}, 2000) //milisegundos = 2segundos


function nextImage() {
    count++; //incrementando
    if(count>4) { 
        count = 1; //loop
    }

    document.getElementById("radio"+count).checked = true; 
}
