const tableRoot = document.querySelector("#csvTable");

function getContent() {
    fileName = select.value
    // console.log(select.value)
    if(tableRoot.children.length > 0) {
        tableRoot.innerHTML = '';
    }
    if (fileName != 'Select Workspace') {
        (() => {
            const rawResponse = fetch('http://localhost:3000/file', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: fileName.slice(0, -1), dir: fileName.charAt(fileName.length-1)})
                }
            ).then(response => response.json())
            .then(data => {
                //console.log(data)
                setTimeout(() => {
                    //console.log(data.data);
                    readTextFile(data.data)}, 500);
            })}
        )()
    }
}