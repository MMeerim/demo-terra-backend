const fs = require('fs');

const sendFile = (name, dir) => {
    let content = ''
    if (dir == 'l') {
        content = fs.readFileSync(`/root/terraform-linux/csvdecode/data/${name}`);
    }
    else if (dir == 'w') {
        content = fs.readFileSync(`/root/terraform-windows/csvdecode/data/${name}`);
    }
    return content.toString()
} 

module.exports = {
    sendFile: sendFile
}