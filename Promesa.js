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

let getEmpleado = id =>{
    return new Promise((resolve,reject)=>{
        let empleadoDB = empleados.find(empleado=>empleado.id === id)
    
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        }else{
            resolve(empleadoDB)
        }
    })
}

let getSalario = empleado =>{
    return new Promise((resolve,reject)=>{
        let salarioDB = salarios.find(salario=>salario.id === empleado.id)
        if(!salarioDB){
            reject(`El empleado no tiene un salario`)
        }else{
            resolve({nombre : empleado.nombre, salario : salarioDB.salario})
        }
    
    })
}

getEmpleado(3).then(empleado =>{
    getSalario(empleado).then(user =>{
        console.log(user)
    },err=>{
        console.log(err)
    })
}, err=>
{
    console.log(err)
})