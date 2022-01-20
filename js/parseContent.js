import TableCsv from "./table.csv.js";

const tableRoot = document.querySelector("#csvTable");
const tableCsv = new TableCsv(tableRoot);

function readTextFile(file){ 
    let cont = file.split('\n')
    for(let i=0; i < cont.length; i++){
        cont[i] = cont[i].split(',')
    }
    for(let i=1; i<cont.length;i++){
        for (let j=0; j<cont[0].length; j++){
            cont[i][j] = cont[i][j].replace('"', '')
            cont[i][j] = cont[i][j].replace('"', '')

        }
    }
    tableCsv.update(cont.slice(1,5), cont[0]);
}

window.readTextFile  = readTextFile