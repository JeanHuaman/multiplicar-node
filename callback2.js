let empleados = [{
    id:1,
    nombre:"Juan"
},
{
    id:2,
    nombre:"Pepe"
},{
    id:3,
    nombre:"Luis"
}],
salarios = [
    {
        id:1,
        salario:1000
    },{
        id:2,
        salario:1500
    }
]

let getEmpleado = (id,callback)=>{
    let empleadoDB = empleados.find(empleado=>empleado.id===id)
    
    if(!empleadoDB){
        callback(`El empleado con el id ${id} no existe`)
    }else{
        callback(null,empleadoDB)
    }
}


let getSalario = (empleado,callback) =>{
    let empleadoPagar = salarios.find(salario=> salario.id === empleado.id)
    if(!empleadoPagar){
        callback(`No es escontró un salario para el usuario ${empleado.nombre}` )
    }else{
        callback(null,{nombre : empleado.nombre, salario : empleadoPagar.salario})
    }
}

getEmpleado(3,(err,empleado)=>{
    if(err){
        return console.log(err)
    }

    console.log(empleado)
    getSalario(empleado,(err,empleadoPaga)=>{
        if(err)
        {
            return console.log(err)
        }
        console.log(empleadoPaga)
    })
})

