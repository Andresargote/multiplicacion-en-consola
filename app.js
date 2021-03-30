const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

/*
const [ , , arg3] = process.argv;
const [ ,base = 1] = arg3.split("=");*/
/*console.log(process.argv);
console.log(yargs);*/
//console.log(argv.list)

crearArchivo(argv.base, argv.until, argv.list)
    .then(nombreArchivo => console.log(colors.green(nombreArchivo, "Creada correctamente")))
    .catch(e => console.error(colores.red(e)))
