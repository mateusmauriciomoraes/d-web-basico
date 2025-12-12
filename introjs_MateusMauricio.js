function bemVindo()
{
    window.alert("bem vindo");
}

function calcularSomaFibonacci(n) 
{
    let soma = 0;
    let a = 1;
    let b = 1;
    let numerosSomados = [];
  
    for (let i = 0; i < n; i++) {
      soma += a;
      numerosSomados.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    return { resultado: soma, numerosSomados };
  }
  
  function calcularESomar() 
  {
    const numTerms = prompt("Informe o número de termos:");
    if (numTerms !== null && numTerms !== "") 
    {
      const { resultado, numerosSomados } = calcularSomaFibonacci(parseInt(numTerms, 10));
      const mensagem = `${resultado} (${numerosSomados.join(' + ')})`;
      alert(mensagem);
    }
  }