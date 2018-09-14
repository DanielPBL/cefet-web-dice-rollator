// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele

document.querySelector('#rolar').addEventListener('click', function(ev) {
    let inputDados = document.querySelectorAll('.dado input');
    let arrValores = [];

    for (let i = 0; i < inputDados.length; i++)
        for (let j = 0; j < inputDados[i].value; j++)
            arrValores.push(Math.ceil(Math.random() * inputDados[i].dataset.lados));
    
    let resultado = 0;
    let strSoma = '';

    if (arrValores.length > 0) {
        for (valor of arrValores) {
            resultado += valor;
            strSoma += valor + ' + ';
        }
        strSoma = strSoma.slice(0, strSoma.length - 2);
        document.querySelector('#resultado').innerHTML = strSoma + '= ' + resultado;
    }

    document.querySelector('#recipienteResultados').classList.remove('oculto');
});