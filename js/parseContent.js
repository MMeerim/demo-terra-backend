import TableCsv from "./table.csv.js";

const tableRoot = document.querySelector("#csvTable");
const tableCsv = new TableCsv(tableRoot);

function readTextFile(file){ 
    let content = file.split('\n')
    if (content[content.length-1] < 1) {
        content.pop()
    }
    for(let i=0; i < content.length; i++){
        content[i] = content[i].split(',')
    }
    for(let i=0; i<content.length;i++){
        for (let j=0; j<content[0].length; j++){
            let word = content[i][j]
            if (word[0] == '"' && word[word.length -1] == '"') {
                if (word.length == 3){
                    word = word[1]
                } else {
                    console.log(word)
                    word = word.substring(1,word.length-1)
                    console.log(word)
                }
            }
            content[i][j] = word
        }
    }
    tableCsv.update(content.slice(1,5), content[0]);
}

window.readTextFile  = readTextFile