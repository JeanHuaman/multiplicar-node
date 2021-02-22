//requireds

const {crearArchivo} = require("./multiplicar/multiplicar")
let argumento=process.argv
let base=argumento[2].split("=")[1]

// console.log(base)

crearArchivo(base)
.then( archivo => console.log(`Archivo creado: ${archivo}`))
.catch(err=>console.log(err))