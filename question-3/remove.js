const fs = require('fs');
const path = require("path");
const process = require("process")

function removeFiles(){
    return new Promise((resolve,reject)=>{
        fs.exists(path.join(__dirname,"Log"), (exists)=>{
            if(exists){// if the directory exists remove all the files
                process.chdir('\Log')
                for(let i =0; i<10; i++){
                    let name = `log${i}.txt`
                    console.log( `delete files...${name}`)
                    fs.unlinkSync(name, (err)=>{
                        if(err)console.log(err)
                    })
                }
                resolve();
            }
            reject();
        })
    })
}
 async function removeDirectory(){
        let results =await removeFiles()
        // delete Log folder
        fs.rmdir(path.join(__dirname, 'Log'), ()=>{
            console.log("directory deleted")
        })
 }

 removeDirectory();