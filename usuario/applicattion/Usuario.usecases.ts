import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/Usuario.repository";

export class UsuarioUseCases{
    private usuarioRepository : UsuarioRepository;

    constructor(usarioRepository: UsuarioRepository){
        this.usuarioRepository=usarioRepository;
    }
    async getAllUsuarios() {
        return await this.usuarioRepository.getAllUsuarios();
    }
    async getUsuarioById(id:String){
        return await this.usuarioRepository.getUsuarioByID(id);
    }
    async postUsuario(usuario:Usuario){
        return await this.usuarioRepository.postUsuario(usuario);
    }
    async updateUsuario(id:String,usuario:Usuario){
        return await this.usuarioRepository.updateUsuario(id,usuario);
    }
}