function buscar() {
    var busca = document.getElementById("busca").value.toUpperCase();
    var divNoticias = document.querySelectorAll(".card");
    
    divNoticias.forEach((e) => {
        var tituloNoticia = e.getElementsByClassName("card-title")[0].textContent.toUpperCase();
        if (tituloNoticia.indexOf(busca) > -1) {
            e.style.display = "";
        } else {
            e.style.display = "none";
        }
    });
}