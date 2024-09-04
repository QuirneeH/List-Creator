// Variáveis
const finishList = JSON.parse(localStorage.getItem("finish"));
const watchingList = JSON.parse(localStorage.getItem("watching"));
const wishList = JSON.parse(localStorage.getItem("wish"));

/**
 * Monta um array com os dados referentes a tabela de *Terminados*
 */
function dataFinish() {
    for(let i = 0; i < finishList.length; i++) {
        const datas = [
            finishList[i]['status'],
            finishList[i]['name'],
            finishList[i]['studio'],
            finishList[i]['note']
        ]
    
        setUpTable(datas, i);
    }
}

/**
 * Monta um array com os dados referentes a tabela de *Assistindo*
 */
function dataWatching() {
    for(let i = 0; i < watchingList.length; i++) {
        const datas = [
            watchingList[i]['status'],
            watchingList[i]['name'],
            watchingList[i]['studio'],
            watchingList[i]['season'],
            watchingList[i]['episode'],
        ]
    
        setUpTable(datas, i);
    }
}

/**
 * Monta um array com os dados referentes a tabela de *Vou Assistir*
 */
function dataWish() {
    for(let i = 0; i < wishList.length; i++) {
        const datas = [
            wishList[i]['status'],
            wishList[i]['name'],
            wishList[i]['studio'],
        ]
    
        setUpTable(datas, i);
    }
}

/**
 * Método criador do botão para edição
 * @param {int} index Numero referente ao índice do array com os dados
 * @returns {HTMLButtonElement}
 */
function createButtonEdit(index, table) {
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn', table, 'edit');
    buttonEdit.id = index;

    const optEdit = document.createElement('i');
    optEdit.classList.add('fa', 'fa-pencil');

    buttonEdit.append(optEdit);

    return buttonEdit;
}

/**
 * Método criador do botão para deleção
 * @param {int} index Numero referente ao índice do array com os dados
 * @returns {HTMLButtonElement}
 */
function createButtonDelete(index, table) {
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn', table, 'delete');
    buttonDelete.id = index;

    const optDelete = document.createElement('i');
    optDelete.classList.add('fa', 'fa-trash');
    
    buttonDelete.append(optDelete);

    return buttonDelete;
}
/**
 * Método de montagem e exibição das tabelas
 * @param {Array} datas Dados especificos de cada tabela
 * @param {int} index Numero referente ao índice do array com os dados
 */
function setUpTable(datas, index) {
    if(datas[0] === "finish")
        table = document.getElementById('tableFinish');
    else if(datas[0] === "watching")
        table = document.getElementById('tableWatching');
    else if(datas[0] === "wish")
        table = document.getElementById('tableWish');
    
    if(datas[2] == '' || datas[2] == null) {
        datas[2] = "N/A"
    }

    const tbody = document.createElement('tbody');
    tbody.classList.add("infos", datas[0]);
    tbody.id = index;
    table.append(tbody);

    for(let i = 1; i < datas.length; i++) {
        const td = document.createElement('td');
        td.innerHTML = datas[i];
        
        tbody.append(td);
    }

    const tdOpt = document.createElement('td');
    tdOpt.classList.add('td-options');

    const buttonEdit = createButtonEdit(index, datas[0]);
    const buttonDelete = createButtonDelete(index, datas[0]);

    tdOpt.append(buttonEdit, buttonDelete);
    tbody.append(tdOpt);
}

// Validador para exibir as tabelas
const verifyFinish = !!localStorage.getItem("finish");
const verifyWathing = !!localStorage.getItem("watching");
const verifyWish = !!localStorage.getItem("wish");

if(verifyFinish) 
    dataFinish();

if(verifyWathing) 
    dataWatching();

if(verifyWish) 
    dataWish();


