function mudaCor()
{
    var vermelho = document.getElementById("rangeVermelho").value;
    var verde = document.getElementById("rangeVerde").value;
    var azul = document.getElementById("rangeAzul").value;
    
    document.getElementById("caixa").style.backgroundColor = "rgb(" + vermelho + "," + verde + "," + azul + ")";

    document.getElementById("vermelho").innerHTML = vermelho;
    document.getElementById("verde").innerHTML = verde;
    document.getElementById("azul").innerHTML = azul;
}