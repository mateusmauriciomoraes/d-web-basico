function arrumaCep(elemento)
{
    var cep = document.getElementById("cep").value
    var tamanho = cep.length
    if(tamanho == 2)
    {
        elemento.value+="."
    }
    if(tamanho == 6)
    {
        elemento.value+="-"
    }
    if(cep.charCodeAt(tamanho-1) < 48 || cep.charCodeAt(tamanho-1) > 57)
    {
        elemento.value = cep.slice(0,tamanho-1)
    }
    document.addEventListener("keydown", function(event){
    if (event.key === "Backspace") 
    {
        elemento.value = "";
    }
}
);
}