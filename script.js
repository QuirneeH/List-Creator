const form = document.getElementById('register');
const table = document.getElementById('table');

var animes = [];

form.addEventListener('submit', () => {
    if(localStorage.anime) {
        animes = JSON.parse(localStorage.getItem("anime"));
    }
    
    const name = document.getElementById('name').value;
    const studio = document.getElementById('studio').value;
    
    const data = {
        name: name,
        studio: studio
    }

    animes.push(data)

    localStorage.setItem("anime", JSON.stringify(animes));
});

function list() {
    if(localStorage.anime) {
        animes = JSON.parse(localStorage.getItem("anime"));
    }
    
    for(var i in animes) {
        tbody = document.createElement("tbody");
        
        
        dataName = document.createElement("td");
        dataName.innerHTML = animes[i].name;
        tbody.append(dataName);

        dataStudio = document.createElement("td"); 
        dataStudio.innerHTML = animes[i].studio;
        tbody.append(dataStudio);
        
        table.append(tbody);
    }
}

list();