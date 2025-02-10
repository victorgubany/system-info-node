import os from "node:os"
import fs from "node:fs"


function showConsole(){
    let name = os.platform()
    let arch = os.arch()
    let pro = os.cpus()[0]['model']
    let timeofsistem = os.uptime()
    let memorie = os.totalmem()
    let freememorie = os.freemem()
    let memorieInUse = memorie - freememorie

    let register = `Name: ${name}\nArchiteture: ${arch}\nProcessor: ${pro}\nTime in use: ${timeofsistem}s\nMemorie in Use: ${memorieInUse}`
    saveInLog(register+'\n\n')

    console.log(register)
    

}

function saveInLog(text){
    const path = "./logs"
    if (!fs.existsSync(path)){
        fs.mkdir(path,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Diretorio criado com sucesso")
            }
        })
    }
    fs.appendFile('logs/log.txt',text,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Log salvo')
        }
    })
}


setInterval(()=>{
    showConsole()
},1000)
// while (true){
//     // setTimeout(()=>{},10000)
    
    

// }
// showConsole()
// saveInLog("teste")






// criar pasta log + log.txt

// a cada 1 s coloque esse log lá 