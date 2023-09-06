document.getElementById("myButton").onclick = function(){
    var tamanho = document.getElementById("myNumber").value
    switch (true) {
        case (tamanho >= 1.50 && tamanho < 1.60):
            alert("MTB de tamanho 14 ou Speed de tamanho 48");
            break;
        case (tamanho >= 1.60 && tamanho < 1.70):
            alert("MTB de tamanho 16 ou Speed 50, 52, 54");
            break;
        case (tamanho >= 1.70 && tamanho < 1.80):
            alert("MTB de tamanho 17, 18 ou Speed de tamanho 54, 55, 56");
            break;
        case (tamanho >= 1.80 && tamanho < 1.90):
            alert("MTB de tamanho 19, 20 ou Speed de tamanho 57, 58");
            break;
        case (tamanho >= 1.90 && tamanho < 2.01):
            alert("MTB de tamanho 21, 22 ou Speed de tamanho 60, 62");
            break;
        default:
            alert("Nenhum resultado");
        } 

   
}
