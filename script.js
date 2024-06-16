const form = document.getElementById('register');
const tableFinish = document.getElementById('tableFinish');
const tableWatching = document.getElementById('tableWatching');
const tableWish = document.getElementById('tableWish');
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
    const status = document.getElementById('registerStatus').value;

    if(status === 'Terminei') {
        const data = {
            name: name,
            studio: studio
        }
    
        animes.push(data)
    
        localStorage.setItem("wish", JSON.stringify(animes));
    }

    if(status === 'Assistindo') {
        const data = {
            name: name,
            studio: studio
        }
    
        animes.push(data)
    
        localStorage.setItem("wish", JSON.stringify(animes));
    }

    if(status === 'Vou Assistir') {
        const data = {
            name: name,
            studio: studio
        }
    
        animes.push(data)
    
        localStorage.setItem("wish", JSON.stringify(animes));
    }
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
function showTables() {
    if(localStorage.finish) {
        tableFinish.style.display = "block";
        
        animes = JSON.parse(localStorage.getItem("finish"));
    }

    if(localStorage.watching) {
        tableWatching.style.display = "block";

        animes = JSON.parse(localStorage.getItem("watching"));
    }

    if(localStorage.wish) {
        tableWish.style.display = "block";

        animes = JSON.parse(localStorage.getItem("wish"));
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
        divOptions = document.createElement("div");
        divOptions.classList.add("options");
        tbody.append(divOptions);

        //Botões de Opção: Editar e Exclur
        buttonPencil = document.createElement("button");
        buttonPencil.id = "optionEdit" + i;
        buttonTrash = document.createElement("button");
        buttonTrash.id = "optionDelete" + i;
        divOptions.append(buttonPencil, buttonTrash);

        //Botões de Editar
        optionPencil = document.createElement("i");
        optionPencil.classList.add("fa", "fa-pencil");
        buttonPencil.append(optionPencil);

        //Botão de Excluir
        optionTrash = document.createElement("i");
        optionTrash.classList.add("fa", "fa-trash");
        buttonTrash.append(optionTrash);
    }

    //Atribuir função de Editar
    for (let i = 0; i < buttonEdit.length; i++) {
        buttonEdit[i].addEventListener("click", function() {
            update(i);
        });
    }

    //Atribuir função de Editar
    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", function() {
            remove(i);
        });
    }
}

//Execuções
showTables();