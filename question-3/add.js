const fs = require('fs');
const path = require("path");
const process = require("process")


function addDirectory(){
    return new Promise((resolve)=>{
        fs.exists(path.join(__dirname,"Log"), (exists) => {
            if(!exists){
                fs.mkdirSync(path.join(__dirname,"Log"),()=>{
                    console.log(`${path.join(__dirname,"Log")} was created`);
                });
                resolve();
            }
    
        });
    })
}
async function createFiles(){
    let directory = await addDirectory();
    process.chdir("\Log");
for(let i = 0; i<10;i++){
    fs.writeFile(`log${i}.txt`,i+" file data", ()=>{
        console.log(`log${i}.txt written to Log folder`)
    })
}
}
createFiles();