import Usuario from "./Usuario";

export default interface UsuarioRepository{
    getAllUsuarios():Promise<Usuario[] | undefined>;
    getUsuarioByID(id:String):Promise<Usuario|undefined>;
    postUsuario(usuario:Usuario):Promise<Usuario|undefined>;
    updateUsuario(id:String,usuario:Usuario):Promise<Usuario|undefined>;
}