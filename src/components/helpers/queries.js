const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETAS;

export const login = async (usuario)=>{
    try{
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        //buscar si en la lista de usuarios existe el mail
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            //si encontre el mail
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log('el password es incorrecto')
                return null
            }
        }else{
            //no encontr el mail
            console.log('el mail no existe')
            return null
        }
    }catch(error){
        console.log(error)
    }
}
export const obtenerRecetas = async (receta)=>{
    try{
        const respuesta2 = await fetch(URL_receta)
        const listaDeRecetas = await respuesta2.json()
        return listaDeRecetas 
    } catch(error){
        console.log(error)
    }
}