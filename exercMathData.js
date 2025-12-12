let Data;
function aleatorio(){
    let dia =Math.floor(Math.random()*31 +1);
    let mes= Math.floor(Math.random()*12 +1);
    let ano= 2023;

    Data = new Date(ano,mes,dia);
    let formatoData = `${dia}/${mes}/${ano}`;
    document.getElementById('dataSorteada').textContent = formatoData;
}

function mudaData(){
    const dataEscolhida = new Date(document.getElementById("data").value);

    if(dataEscolhida >= Data){
        alert("A data escolhida é maior ou igual à data sorteada")
    }
}