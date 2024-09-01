// Variaveis
const radioFinish = document.getElementById('divFinish');
const ratioWatching = document.getElementById('divWatching');

/**
 * Função responável pela exibição dos campos para os Animes Terminados 
 * e deixar os dados dos outros campos em branco
 */
function showOptionsFinished()
{
    if(radioFinish.style.display === 'none') {
        radioFinish.style.display = 'block';
        ratioWatching.style.display = 'none';
    }
    
    document.getElementById('watchingSeason').value = '';
    document.getElementById('watchingEpisode').value = '';
}

/**
 * Função responável pela exibição dos campos para os Animes Assistindo 
 * e deixar os dados dos outros campos em branco
 */
function showOptionsWatching()
{
    if(ratioWatching.style.display === 'none') {
        ratioWatching.style.display = 'block';
        radioFinish.style.display = 'none';
    }
    
    document.getElementById('finishNote').value = '';
}

/**
 * Função responável por ocultar os outros campos e deixa-los em branco
 */
function hideOptions()
{
    if(ratioWatching.style.display === 'block') {
        ratioWatching.style.display = 'none'
    } else if(radioFinish.style.display = 'block') {
        radioFinish.style.display = 'none'
    }

    document.getElementById('finishNote').value = '';
    document.getElementById('watchingSeason').value = '';
    document.getElementById('watchingEpisode').value = '';
}