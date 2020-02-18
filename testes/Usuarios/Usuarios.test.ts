import { Usuario } from "../../src/Usuarios/Entities/Usuario"


describe('Um novo usuário', () => {
    it.each([
        "@gmail.com.gov",
        "email",
        "email@gmail"
    ])(
        'lança exceções ao receber emails invalidos',
        (emailInvalido) => {
            const criarUsuario = () => {
                new Usuario("Ricardo", emailInvalido)
            }
            expect(criarUsuario).toThrow();
        }
    );

    it.each([
        "email.1@gmail.com",
        "email.1@gmail.com.br",
        "email@gmail.com",
        "1@gmail.com",
        "1asd@gmail.com",
    ])(
        "aceita apenas emails validos",
        (emailValido) => {
            const usuario = new Usuario("Ricardo", emailValido);
            expect(usuario).toBeDefined();
        }
    );
});