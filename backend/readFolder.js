const fs = require('fs');

const dir = '/root/terraform-linux/csvdecode/data';
const dir2 = '/root/terraform-windows/csvdecode/data'

function readFolder() {
    try {
        const linux = fs.readdirSync(dir);
        const windows = fs.readdirSync(dir2);
        return {linux: linux, windows: windows}
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    readFolder: readFolder
  }
