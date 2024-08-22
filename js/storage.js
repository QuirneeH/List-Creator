// Variáveis
const form = document.getElementById('register');

// Evento após enviar os dados pelo formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const datas = getDatas();
    var list = [];

    // Armazenando os Animes Terminados
    if(datas['status'] === "finish") {
        const verify = !!localStorage.getItem("finish");

        if(verify) {
            const finishList = JSON.parse(localStorage.getItem("finish"));
            let i = finishList.length;

            list = finishList;

            if(dataComparator(list, datas)){
                alert("Obra Já Adicionada");
            } else {
                list[i] = datas;
            
                localStorage.removeItem(datas['status']);
                localStorage.setItem(datas['status'], JSON.stringify(list));
                clearInputs();
            }
        } else {
            list[0] = datas;

            localStorage.setItem(datas['status'], JSON.stringify(list));
            clearInputs();
        }
    }

    // Armazenando os Animes Assistindo
    if(datas['status'] === "watching") {
        const verify = !!localStorage.getItem("watching");

        if(verify) {
            const watchingList = JSON.parse(localStorage.getItem("watching"));
            let i = watchingList.length;

            list = watchingList;

            if(dataComparator(list, datas)){
                alert("Obra Já Adicionada");
            } else {
                list[i] = datas;
            
                localStorage.removeItem(datas['status']);
                localStorage.setItem(datas['status'], JSON.stringify(list));
                clearInputs();
            }
        } else {
            list[0] = datas;

            localStorage.setItem(datas['status'], JSON.stringify(list));
            clearInputs();
        }
    }

    // Armazenando os Animes Desejados
    if(datas['status'] === "wish") {
        const verify = !!localStorage.getItem("wish");

        if(verify) {
            const wishList = JSON.parse(localStorage.getItem("wish"));
            let i = wishList.length;

            list = wishList;

            if(dataComparator(list, datas)){
                alert("Obra Já Adicionada");
            } else {
                list[i] = datas;
            
                localStorage.removeItem(datas['status']);
                localStorage.setItem(datas['status'], JSON.stringify(list));
                clearInputs();
            }
        } else {
            list[0] = datas;

            localStorage.setItem(datas['status'], JSON.stringify(list));
            clearInputs();
        }
    }
});

/**
 * Coleta os dados enviados pelo formulário
 * @returns {Array} datas
 */
function getDatas() {
    const name = document.getElementById('registerName').value;
    const studio = document.getElementById('registerStudio').value;
    const status = document.querySelector('input[name="status"]:checked')?.value;

    let note = null;
    let season = null;
    let episode = null;

    if (status === 'finish') {
        note = document.getElementById('finishNote').value;
    }

    if (status === 'watching') {
        season = document.getElementById('watchingSeason').value;
        episode = document.getElementById('watchingEpisode').value;
    }

    const datas = {
        'name': name,
        'studio': studio,
        'status': status,
        'note': note,
        'season': season,
        'episode': episode
    };

    return datas;
}

/**
 * Limpa os campos após enviar os dados pelo formulário
 */
function clearInputs() {
    document.getElementById('registerName').value = '';
    document.getElementById('registerStudio').value = '';
    document.querySelectorAll('input[name="status"]').forEach((radio) => {
        radio.checked = false;
    });
    
    document.getElementById('finishNote').value = '';
    document.getElementById('watchingSeason').value = '';
    document.getElementById('watchingEpisode').value = '';

    document.getElementById('divFinish').style.display = 'none';
    document.getElementById('divWatching').style.display = 'none';
}

/**
 * 
 * @param {Array} list 
 * @param {Array} datas 
 * @returns {boolean}
 */
function dataComparator(list, datas) {
    // Verifica se cada elemento é igual
    for (let i = 0; i < list.length; i++) {
        if (list[i]['name'] === datas['name']) {
            return true;
        }
    }
    return false;
}