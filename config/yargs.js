const argv = require("yargs")
                .option("b", {
                    alias: "base",
                    type: "number",
                    demandOption: true,
                    describe: "Es la base de la tabla de multiplicar"
                })
                .option("u", {
                    alias: "until",
                    type: "number",
                    default: 10,
                    describe: "Es hasta donde queremos multiplicar la base"
                })
                .option("l", {
                    alias: "list",
                    type: "boolean",
                    default: false,
                    describe: "Muestra la tabla en consola"
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw "La base tiene que ser un numero"
                    }
                    
                    return true

                })
                .argv;

module.exports = argv;