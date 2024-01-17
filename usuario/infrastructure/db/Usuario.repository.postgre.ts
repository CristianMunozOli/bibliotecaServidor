import Usuario from "../../domain/Usuario";
import UsuarioRepository from "../../domain/Usuario.repository";
import executeQuery from "../../../context/postgres.connector";

export default class UsuarioRepositoryPostgre implements UsuarioRepository{
    async getAllUsuarios(): Promise<Usuario[] | undefined> {
        const sql = "select * from usuarios";
        try {
            const usuario:Usuario[] = await executeQuery(sql);    
            return usuario;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    async getUsuarioByID(id: String): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
    async postUsuario(usuario: Usuario): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
    async updateUsuario(id: String, usuario: Usuario): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
 

}