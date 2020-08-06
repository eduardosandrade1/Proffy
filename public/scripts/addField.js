// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField);
// Quando clicar no botão 

// Executar uma ação
function cloneField(){
    // Duplicar os campos. Que campo??

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    // .cloneNode(true ou false) Faz clone do nó passado
    //true copia tudo que tem dentro do nó, flase apenaas o nó passado 

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function (field){
        //pegar o field do momento e limpa ele
        field.value = "";
    })

    // Colocar na página. Onde???
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}