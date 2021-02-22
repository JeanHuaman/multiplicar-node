let getUsuarioByid = (id,callback)=>{
    let usuario ={
        nombre:"Jean",
        id
    }
    if(id === 20)
    {
        callback(`El usuario con id ${id}, no existe en la base de datos`)
    }else{

        callback(null,usuario);
    }
}

getUsuarioByid(1,(err,user)=>{
    if(err){
        return console.log(err)
    }
    console.log("Usuario de base de datos", user)
})