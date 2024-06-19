var radioFinish = document.getElementById('divFinish');
var ratioWatching = document.getElementById('divWatching');

function showOptionsFinished()
{
    if(radioFinish.style.display === 'none') {
        radioFinish.style.display = 'block';
        ratioWatching.style.display = 'none';
    }
}

function showOptionsWatching()
{
    if(ratioWatching.style.display === 'none') {
        ratioWatching.style.display = 'block';
        radioFinish.style.display = 'none';
    }
}

function hideOptions()
{
    if(ratioWatching.style.display === 'block') {
        ratioWatching.style.display = 'none'
    } else if(radioFinish.style.display = 'block') {
        radioFinish.style.display = 'none'
    }
}