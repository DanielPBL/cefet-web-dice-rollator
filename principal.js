// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele

document.querySelector('#rolar').addEventListener('click', function() {
    let inputDados = document.querySelectorAll('.dado input');
    let arrValores = [];

    for (let inputDado of inputDados) {
        for (let j = 0; j < inputDado.value; j++) {
            arrValores.push(Math.ceil(Math.random() * inputDado.dataset.lados));
        }
    }
    
    let resultado = arrValores.reduce((a, b) => a + b, 0);

    if (resultado) {
    	document.querySelector('#resultado').innerHTML = arrValores.join(' + ') + ' = ' + resultado;
    }
    
    document.querySelector('#recipienteResultados').classList.remove('oculto');
});
