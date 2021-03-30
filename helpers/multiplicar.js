const fs = require("fs");
const colors = require("colors");

const crearArchivoTablaDeMultiplicar = async (base = 1, until, list) => {

    try {
        
        let salida = "";
        let consola = "";

        for(let i = 1; i <= until; i++){
            salida += `${base} ${colors.cyan("x")} ${i} ${colors.cyan("=")} ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }

        if(list){
            console.log(colors.rainbow("============="));
            console.log("Tabla del:", base);
            console.log(colors.rainbow("============="));
            
            console.log(salida)   
        }
    
        //file system
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt`

    }catch(err){
        throw err
    }

}

module.exports = {
    crearArchivo: crearArchivoTablaDeMultiplicar
}