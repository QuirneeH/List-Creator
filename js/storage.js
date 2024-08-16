// Variáveis
const form = document.getElementById('register');

// Evento após enviar os dados pelo formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const datas = getDatas();
    clearInputs();

    // Armazenando os Animes Terminados
    if(datas['status'] === "finish") {
        localStorage.setItem(datas['status'], JSON.stringify(datas));
    }

    // Armazenando os Animes Assistindo
    if(datas['status'] === "watching") {
        localStorage.setItem(datas['status'], JSON.stringify(datas));
    }

    // Armazenando os Animes Vou Assistir
    if(datas['status'] === "wish") {
        localStorage.setItem(datas['status'], JSON.stringify(datas));
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