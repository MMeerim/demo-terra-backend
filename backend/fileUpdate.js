const fs = require('fs');

const fileUpdate = (obj) => {
    if (obj.dir == 'l') {
        heads = JSON.stringify(obj.heads)
        fs.writeFileSync('/root/terraform-linux/csvdecode/data'+obj.fileName, heads.substring(1, heads.length-1))
        for(let i=1; i<obj.values.length; i++){
            values = JSON.stringify(obj.values[i])
            fs.appendFileSync('/root/terraform-linux/csvdecode/data'+obj.fileName, '\n' + values.substring(1, values.length-1) )
        }
    }
    else if (obj.dir == 'w') {
        heads = JSON.stringify(obj.heads)
        fs.writeFileSync('/root/terraform-windows/csvdecode/data'+obj.fileName, heads.substring(1, heads.length-1))
        for(let i=1; i<obj.values.length; i++){
            values = JSON.stringify(obj.values[i])
            fs.appendFileSync('/root/terraform-windows/csvdecode/data'+obj.fileName, '\n' + values.substring(1, values.length-1) )
        }
    }
}

module.exports = {
    fileUpdate: fileUpdate
  }



// /root/terraform-linux/csvdecode/data
// /root/terraform-windows/csvdecode/data

