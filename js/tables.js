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
    
        setUpTable(datas);
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
    
        setUpTable(datas);
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
    
        setUpTable(datas);
    }
}

/**
 * Método de montagem e exibição das tabelas
 * @param {Array} datas Dados especificos de cada tabela
 */
function setUpTable(datas) {
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
    tbody.id = "tbodyFinish";
    table.append(tbody);

    for (let j = 1; j < datas.length; j++) {
        const td = document.createElement('td');
        td.innerHTML = datas[j];

        tbody.append(td);
    }
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