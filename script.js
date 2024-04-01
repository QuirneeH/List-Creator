const form = document.getElementById('register');
const table = document.getElementById('table');
const buttonEdit = document.getElementsByClassName("fa fa-pencil");
const buttonDelete = document.getElementsByClassName("fa fa-trash");
var animes = [];

/**
 * 
 */
form.addEventListener('submit', () => {
    if(localStorage.anime) {
        animes = JSON.parse(localStorage.getItem("anime"));
    }
    
    const name = document.getElementById('registerName').value;
    const studio = document.getElementById('registerStudio').value;
    
    const data = {
        name: name,
        studio: studio
    }

    animes.push(data)

    localStorage.setItem("anime", JSON.stringify(animes));
});

/**
 * Atualiza um Informação
 * @param {int} id 
 */
function update(id) {
    var anime = JSON.parse(localStorage.getItem("anime"));

    alert(id);
}

/**
 * Deleta um Informação
 * @param {int} id 
 */
function remove(id) {
    var anime = JSON.parse(localStorage.getItem("anime"));

    anime.splice(id);

    localStorage.setItem("anime", JSON.stringify(anime));

    window.location.reload(true);
}

/**
 * Exibição da Tabela com as Informações
 */
function showTable() {
    if(localStorage.anime) {
        table.style.display = "block";
        animes = JSON.parse(localStorage.getItem("anime"));
    }
    
    for(var i in animes) {
        //Corpo da Tabela
        tbody = document.createElement("tbody");
        table.append(tbody);
        //Informação: Nome
        dataName = document.createElement("td");
        dataName.innerHTML = animes[i].name;
        tbody.append(dataName);
        //Informação: Estudio
        dataStudio = document.createElement("td");
        dataStudio.innerHTML = animes[i].studio;
        tbody.append(dataStudio);
        //Div dos Botões de Opção
        div = document.createElement("div");
        div.classList.add("options");
        tbody.append(div);
        //Botões de Opção: Editar e Exclur
        buttonPencil = document.createElement("button");
        buttonPencil.id = "optionEdit" + i;
        buttonTrash = document.createElement("button");
        buttonTrash.id = "optionDelete" + i;
        div.append(buttonPencil, buttonTrash);
        //Botões de Editar
        optionPencil = document.createElement("i");
        optionPencil.classList.add("fa", "fa-pencil");
        buttonPencil.append(optionPencil);
        //Botão de Excluir
        optionTrash = document.createElement("i");
        optionTrash.classList.add("fa", "fa-trash");
        buttonTrash.append(optionTrash);

        //Atribuir função de Excluir
        // ...
    }

    //Atribuir função de Editar
    for (let i = 0; i < buttonEdit.length; i++) {
        buttonEdit[i].addEventListener("click", function() {
            update(i);
        });
    }

    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", function() {
            remove(i);
        });
    }
}

// <!-- Form from Edit Informação -->
// <form id="update">
//     <label for="updateName">Nome: </label>
//     <input type="text" id="updateName">

//     <label for="updateStudio">Estudio: </label>
//     <input type="text" id="updateStudio">

//     <input type="submit" value="Enviar">
// </form>
// <!-- /Form from Edit Informação --></input>
function generateForm() {
    tdForm = document.createElement("form");
    tdLabel = document.createElement("label");
    tdInput = document.createElement("input");
    tbody = document.createElement("tbody");
    
    tdForm.classList.add("update");

}

//Execuções
showTable();

