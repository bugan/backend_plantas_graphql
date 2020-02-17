import { Usuario } from "../../src/Usuarios/Models/Usuario"


describe('Um novo usuário', () => {
    it('lança exceções ao receber emails invalidos', () => {
        const emailInvalido = "@gmail.com";
        const criarUsuario =()=>{
            new Usuario("Ricardo", emailInvalido)
        }
        expect(criarUsuario).toThrow();
    }),

    it('aceita emails validos ', () => {
        const emailValido = "dones@gmail.com.br";
        const usuario = new Usuario("Ricardo", emailValido);
        expect(usuario).toBeDefined();
    });

    
});