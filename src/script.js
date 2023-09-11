document.getElementById("myButton").onclick = function(){
    var tamanho = parseFloat(document.getElementById("myNumber").value);
    var resultadoElement = document.getElementById("resultado");
    var select = document.getElementById("tipoBicicleta").value;
    
    var resultado = "";
    
    switch (select) {
        case "1":
            if (tamanho <= 1.40){
                resultado = "Você necessita de um quadro de tamanho personalizado"; 
            } else if (tamanho >= 1.50 && tamanho < 1.60) {
                resultado = "O tamanho de quadro ideal para você é o 14";
            } else if (tamanho >= 1.60 && tamanho < 1.70){    
                resultado = "O tamanho de quadro ideal para você é o 16";         
            } else if (tamanho >= 1.70 && tamanho < 1.80){
                resultado = "O tamanho de quadro ideal para você é o 17 ou 18";
            } else if (tamanho >= 1.80 && tamanho < 1.90){
                resultado = "O tamanho de quadro ideal para você é o 19 ou 20";
            } else if (tamanho >= 1.90 && tamanho < 2.01){
                resultado = "O tamanho de quadro ideal para você é o 21 ou 22";
            } else {
                resultado = "Nenhum resultado";
            }
            break;
        
        case "2":
            if (tamanho >= 1.50 && tamanho < 1.60) {
                resultado = "O tamanho de quadro ideal para você é o 48";
            } else if (tamanho >= 1.60 && tamanho < 1.70){
                resultado = "O tamanho de quadro ideal para você é o 50, 52 ou 54";
            } else if (tamanho >= 1.70 && tamanho < 1.80){
                resultado = "O tamanho de quadro ideal para você é o 55 ou 56";
            } else if (tamanho >= 1.80 && tamanho < 1.90){
                resultado = "O tamanho de quadro ideal para você é o  57 ou 58";
            } else if (tamanho >= 1.90 && tamanho < 2.01){
                resultado = "O tamanho de quadro ideal para você é o 60, 61 ou 62";
            } else if (tamanho >= 2.20){
                resultado = "Você necessita de um quadro de tamanho personalizado";
            } else {
                resultado = "Nenhum resultado";
            }
            break;
        
        case "3":
            if (tamanho >= 1.50 && tamanho < 1.60) {
                resultado = "O tamanho de quadro ideal para você é o 48";
            } else if (tamanho >= 1.60 && tamanho < 1.70){
                resultado = "O tamanho de quadro ideal para você é o 50, 52 ou 54";
            } else if (tamanho >= 1.70 && tamanho < 1.80){
                resultado = "O tamanho de quadro ideal para você é o 55 ou 56";
            } else if (tamanho >= 1.80 && tamanho < 1.90){
                resultado = "O tamanho de quadro ideal para você é o 57 ou 58";
            } else if (tamanho >= 1.90 && tamanho < 2.01){
                resultado = "O tamanho de quadro ideal para você é o 60 ou 62";
            } else if (tamanho >= 2.20){
                    resultado = "Você necessita de um quadro de tamanho personalizado";
            } else {
                resultado = "Nenhum resultado";
            }
            break;
        
        default:
            resultado = "Nenhum resultado";
    } 

    resultadoElement.textContent = resultado;

}