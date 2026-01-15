const { defineConfig } = require("cypress");
const XLSX = require('xlsx')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) 
    {
      // implement node event listeners 
      on('task',{
        writeExcel({data,filepath}){

          const dir = path.dirname(filepath)
          if(!fs.existsSync(dir))
          {
            fs.mkdirSync(dir,{recursive:true})
          }
           const worksheet = XLSX.utils.json_to_sheet(data)
           const workbook = XLSX.utils.book_new()
           XLSX.utils.book_append_sheet(workbook,worksheet,'searchResults')
           XLSX.writeFile(workbook, filepath)
           return null;
        }
      })
    },
  },
});
