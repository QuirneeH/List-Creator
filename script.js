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
    
    const status = document.querySelector('input[name="status"]:checked').value;

    console.log(status);
    if(status === 'finish') {
        var name = document.getElementById('registerName').value;
        var studio = document.getElementById('registerStudio').value;
        var note = document.getElementById('finishNote').value;

        const datas = {
            name: name,
            studio: studio,
            note: note
        }
    
        animes.push(datas)
    
        localStorage.setItem("finish", JSON.stringify(animes));
    }

    if(status === 'watching') {
        var name = document.getElementById('registerName').value;
        var studio = document.getElementById('registerStudio').value;
        var season = document.getElementById('watchingSeason').value;
        var episode = document.getElementById('watchingEpisode').value;

        const datas = {
            name: name,
            studio: studio,
            season: season,
            episode: episode
        }
    
        animes.push(datas)
    
        localStorage.setItem("watching", JSON.stringify(animes));
    }

    if(status === 'wish') {
        const datas = {
            name: name,
            studio: studio
        }
    
        animes.push(datas)
    
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
function removeFinish(id) {
    var finished = JSON.parse(localStorage.getItem("finish"));

    finished.splice(id);

    localStorage.setItem("finish", JSON.stringify(finished));

    window.location.reload(true);
}

/**
 * Deleta um Informação
 * @param {int} id 
 */
function removeWatching(id) {
    var watching = JSON.parse(localStorage.getItem("watching"));

    watching .splice(id);

    localStorage.setItem("watching", JSON.stringify(watching));

    window.location.reload(true);
}

/**
 * Deleta um Informação
 * @param {int} id 
 */
function removeWish(id) {
    var want = JSON.parse(localStorage.getItem("wish"));

    want.splice(id);

    localStorage.setItem("wish", JSON.stringify(want));

    window.location.reload(true);
}

/**
 * Exibição da Tabela com as Informações
 */
function showTables() {
    if(localStorage.finish) {
        tableFinish.style.display = "block";
        
        animes = JSON.parse(localStorage.getItem("finish"));

        for(var i in animes) {
            //Corpo da Tabela
            tbody = document.createElement("tbody");
            tableFinish.append(tbody);

            //Informação: Nome
            dataName = document.createElement("td");
            dataName.innerHTML = animes[i].name;
            tbody.append(dataName);

            //Informação: Estudio
            dataStudio = document.createElement("td");
            dataStudio.innerHTML = animes[i].studio;
            tbody.append(dataStudio);

            //Informação: Nota
            dataNote = document.createElement("td");
            dataNote.innerHTML = animes[i].note;
            tbody.append(dataNote);

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
                removeFinish(i);
            });
        }
    }

    if(localStorage.watching) {
        tableWatching.style.display = "block";

        animes = JSON.parse(localStorage.getItem("watching"));

        for(var i in animes) {
            //Corpo da Tabela
            tbody = document.createElement("tbody");
            tableWatching.append(tbody);

            //Informação: Nome
            dataName = document.createElement("td");
            dataName.innerHTML = animes[i].name;
            tbody.append(dataName);

            //Informação: Estudio
            dataStudio = document.createElement("td");
            dataStudio.innerHTML = animes[i].studio;
            tbody.append(dataStudio);

            //Informação: Temporada
            dataSeason = document.createElement("td");
            dataSeason.innerHTML = animes[i].season;
            tbody.append(dataSeason);

            //Informação: Episodio
            dataEpisode = document.createElement("td");
            dataEpisode.innerHTML = animes[i].episode;
            tbody.append(dataEpisode);

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
                removeWatching(i);
            });
        }
    }

    if(localStorage.wish) {
        tableWish.style.display = "block";

        animes = JSON.parse(localStorage.getItem("wish"));

        for(var i in animes) {
            //Corpo da Tabela
            tbody = document.createElement("tbody");
            tableFinish.append(tbody);

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
                removeWish(i);
            });
        }
    }
}

//Execuções
showTables();