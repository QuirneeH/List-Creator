// Variáveis
const form = document.getElementById('register');

// Evento após enviar os dados pelo formulário
form.addEventListener('submit', (e) => {
    // e.preventDefault();
    
    const datas = getDatas();
    var list = [];
    
    const verify = !!localStorage.getItem(datas['status']);

    if (verify) {
        const storageList = JSON.parse(localStorage.getItem(datas['status']));
        let i = storageList.length;

        list = storageList;

        if (dataComparator(list, datas)) {
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

    return list;
});

/**
 * Coleta os dados enviados pelo formulário
 * @returns {Array} Dados enviados pelo usuário
 */
function getDatas() {
    const name = document.getElementById('registerName').value;
    var studio = document.getElementById('registerStudio').value;
    const status = document.querySelector('input[name="status"]:checked')?.value;

    let note = null;
    let season = null;
    let episode = null;

    if(status === 'finish') {
        note = document.getElementById('finishNote').value;
    }

    if(status === 'watching') {
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
 * Verifica a semelhança entre os dados
 * @param {Array} list 
 * @param {Array} datas 
 * @returns {boolean}
 */
function dataComparator(list, datas) {
    // Verifica se cada elemento é igual
    for(let i = 0; i < list.length; i++) {
        if (list[i]['name'] === datas['name']) {
            return true;
        }
    }
    return false;
}