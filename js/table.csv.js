export default class {
    /**
     * @param {HTMLTableElement} root  The table element which will display the CSV data. 
     */
   constructor(root) {
       this.root = root;
    
   }
   
   /**
    * Clears existing data in the table and replaces it with the new data.
    * 
    * @param {string[][]} data A 2D array of data to be used as the table body
    * @param {string{}} headerColumns List of headings to be used
    */
   update(data, headerColumns = []) {
    //    console.log('data: ', data)
    //    console.log("header", headerColumns)
       this.setHeader(headerColumns);
       this.setBody(data);
   }

   /**
    * Sets the table header.
    *
    * @param {string[]} headerColumns List of headings to be used
    */
    setHeader(headerColumns) {
        this.root.insertAdjacentHTML("afterbegin", `
            <thead>
                <tr>
                    ${ headerColumns.map(text => `<th>${text}</th>`).join("") }
                </tr>
            </thead>
        `);
    }

    setBody(data) {
        const rowsHTML = data.map(row => {
            return `
                <tr>
                    ${ row.map (text => `<td><input value='${ text }'></input></td>` ).join("") }
                </tr>
            `;
        } );
        
        this.root.insertAdjacentHTML( "beforeend", 
        `
            <tbody>
                ${ rowsHTML.join("") }
            </tbody>
        `
        );
    }

}