const select = document.querySelector("#fileInput");

function getFilesData() {
    if(tableRoot.children.length > 0) {
        tableRoot.innerHTML = '';
    }
    fetch('http://localhost:3000/files', { 
        method: 'GET'
    }).then(response => response.json())
        .then(data => createFilesName(data));
}


function createFilesName(data) {
    console.log(data)
    try {
        var child = select.lastElementChild; 
        while (child) {
            select.removeChild(child);
            child = select.lastElementChild;
        }
    }
    catch (error){
        console.log(error)
    }
    finally {
        select.innerHTML += `<option value="Select Workspace">Select Workspace</option>`
        for(let i=0; i<data['linux'].length; i++){
            select.innerHTML += `<option value="${data['linux'][i]}l">${data['linux'][i]} (L)</option>`
        }
        for(let i=0; i<data['windows'].length; i++){
            select.innerHTML += `<option value="${data['windows'][i]}w">${data['windows'][i]} (w)</option>`
        }
    }
}
