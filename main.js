var images = ["neel.jpg", "dad.jpg", "mom.jpg", "granparents.jpg"];
var names = ["My Family", "Neel Singh, Me", "Vikram Jhanji, Dad", "Nivedita Singh, Mom", "Kiren Singh and K.P Singh, Grandparents"];
var i = 0;
function next() {
    document.getElementById("img").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
    if (i == 4)
    {
        i = 0;
    }
}
