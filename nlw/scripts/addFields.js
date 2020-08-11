//Procurar botão
//Search button
document.querySelector("#add-time")

//Quando clicar no botão, executar uma ação
//When you click the button, perform an action
.addEventListener('click', cloneField)

//Executar uma ação
//Perform an action
function cloneField(){
    //Duplicando os campos
    //Duplicating fields
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos para limpa-los
    //Take the fields to clean them 
    const fields = newFieldsContainer.querySelectorAll('input')

    //Fazendo uma iteração para limpar cada campo
    //Iterating to clear each field
    fields.forEach(element => {
        element.value = ""
    });

    //Informando o lugar na página que será renderizado
    //Informing the place on the page that will be rendered
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}

