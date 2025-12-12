function verifica()
{
    let senha = document.getElementById("senha").value;
    let tamanho = senha.length;
    let verificacao = document.getElementById("verificacao").value;
    if(senha == verificacao && tamanho > 5)
    {
        document.getElementById("confirmacao").innerHTML = "confirmada";
    }else
        {
            document.getElementById("confirmacao").innerHTML = "nao confirmada";
        }

    let forca = 0;
    if(tamanho > 5)
    {
        forca++;
    }
    if(tamanho > 8)
    {
        forca++;
    }

        let numeros=0;
        let minusculas=0;
        let maiusculas=0;
        let especiais=0;

    for(let i=0; i<=tamanho;i++)
    {
        if(48 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 57)
        {
            numeros=1;
        }
        if(65 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 90)
        {
            minusculas=1;
        }
        if(97 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 122)
        {
            maiusculas=1;
        }
        if(senha.charCodeAt(i) < 48 && senha.charCodeAt(i) < 122)
        {
            especiais=1;
        }
    }

    if(numeros==1)
    {
        forca++;
    }

    if(minusculas==1)
    {
        forca++;
    }

    if(maiusculas==1)
    {
        forca++;
    }

    if(especiais==1)
    {
        forca++;
    }

    document.getElementById("forca").innerHTML = "força: "+forca+"";

    document.getElementById("barra").style.width= forca*50+"px";

    document.getElementById("barra").style.backgroundColor = "rgb(0, "+235/(forca/2)+", 0)"
    
}