const opt = {
    base:{
        demand:true,
        alias:"b"
    },
    limite : {
        alias:"l",
        default:10
    }  
}

const argv=require("yargs")
.command("listar","Imprime en consola la tabla de multiplicar",opt)
.command("crear","Crear una nueva tabla",opt)
.help()
.argv

module.exports = {
    argv
}