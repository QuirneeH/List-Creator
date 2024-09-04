/**
 * Altera os dados de um item na Lista
 * @param {string} list 
 * @param {int} id 
 */
function edit(list, id) {
    // continua..
}

/**
 * Remove um item da lista
 * @param {string} list Nome da Lista no *Armazen*
 * @param {int} id Indice no Array da lista
*/
function remove(list, id) {
    const storageList = JSON.parse(localStorage.getItem(list));
    console.log(storageList);
    
    storageList.splice(id, 1);
    console.log(storageList);
    
    localStorage.setItem(list, JSON.stringify(storageList));
    location.reload();
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const table = button.classList[1]
        const action = button.classList[2];
        const id = button.id;

        if(action === 'edit') {
            edit();
        } else if(action === 'delete') {
            remove(table, id);
        }
    });
});