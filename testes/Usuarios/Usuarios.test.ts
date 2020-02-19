import { Usuario, ProriedadeInvalida, ProriedadeJaDefinida } from "../../src/Usuarios/Entities/Usuario";
import { ColecaoDePlantas } from "../../src/Usuarios/Entities/ColecaoDePlantas";
import { PlantaDeColecao } from "../../src/Usuarios/Entities/PlantaDeColecao";


describe("Um novo usuário", () => {
    it.each([
        "@gmail.com.gov",
        "email",
        "email@gmail"
    ])(
        "Lança exceções ao receber emails invalidos",
        (emailInvalido) => {
            const criarUsuario = () => {
                const usuario = new Usuario("Ricardo", emailInvalido);
            };
            expect(criarUsuario).toThrowError(ProriedadeInvalida);
        }
    );

    it.each([
        "email.1@gmail.com",
        "email.1@gmail.com.br",
        "email@gmail.com",
        "1@gmail.com",
        "1asd@gmail.com"
    ])(
        "Aceita apenas emails validos",
        (emailValido) => {
            const usuario = new Usuario("Ricardo", emailValido);
            expect(usuario).toBeDefined();
        }
    );
});


describe("Um usuário já criado", () => {
    let usuario;
    beforeEach(() => {
        usuario = new Usuario("teste", "valido@email.com");
    });

    it("Pode receber uma Coleção de plantas ja construida como sendo sua", () => {
        const colecao = new ColecaoDePlantas(usuario);
        usuario.adicionarColecao(colecao);
        expect(usuario.Colecao).toBeDefined();
    });

    it("Pode criar uma colecao de plantas", () => {
        usuario.criarColecao();
        expect(usuario.Colecao).toBeDefined();
    });
});


describe("Um usuário que possui uma coleção de plantas", () => {
    let usuario;
    beforeEach(() => {
        usuario = new Usuario("teste", "Valido@email.com");
        usuario.criarColecao();
    });

    it("Lança uma excessão ao tentarmos criar uma nova coleção", () => {
        const tentaAdicionar = () => {
            usuario.criarColecao();
        };
        expect(tentaAdicionar).toThrowError(ProriedadeJaDefinida);
    });

    it("Lança uma excessão ao tentarmos adicionar uma coleção", () => {
        const tentaAdicionar = () => {
            const colecao = new ColecaoDePlantas(usuario);
            usuario.adicionarColecao(colecao);
        };
        expect(tentaAdicionar).toThrowError(ProriedadeJaDefinida);
    });

    it("Pode adicionar plantas a coleção existente", () => {
        const planta = new PlantaDeColecao();
        usuario.adicionarPlantaAColecao(planta);
        expect(usuario.Colecao.Tamanho).toEqual(1);
    });

    it("Pode remover plantas a coleção existente", () => {
        const planta = new PlantaDeColecao();
        usuario.adicionarPlantaAColecao(planta);
        usuario.removerPlantaDaColecao(planta);
        expect(usuario.Colecao.Tamanho).toEqual(0);
    });
});
