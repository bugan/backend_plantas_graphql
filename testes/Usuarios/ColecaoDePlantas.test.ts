import { ColecaoDePlantas, AcessoNegado } from "../../src/Usuarios/Entities/ColecaoDePlantas";
import { PlantaDeColecao } from "../../src/Usuarios/Entities/PlantaDeColecao";
import { Usuario } from "../../src/Usuarios/Entities/Usuario";


describe('Uma ColecaoDePlantas', () => {
    let colecao;
    const usuario = new Usuario("Ricardo", "email@gmail.com.br");
    beforeEach(() => {
        colecao = new ColecaoDePlantas(usuario);
    });
    
    it('adiciona uma plantaDecoleção na sua lista', () => {
        colecao.adicionar(new PlantaDeColecao(), usuario);
        expect(colecao.Tamanho).toBe(1);
    });

    it('remove uma plantaDeColecao existente na sua lista', () => {
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        colecao.adicionar(planta, usuario);
        colecao.remover(planta, usuario);
        expect(colecao.Tamanho).toBe(0);
    });

    it('não deve remover uma planta que não existe de sua lista', () => {
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        const planta1:PlantaDeColecao =  new PlantaDeColecao();
        colecao.adicionar(planta1, usuario);
        colecao.remover(planta, usuario);

        expect(colecao.Tamanho).toBe(1);
    });

    it('pertence a um usuário', () => {
        expect(colecao.Proprietario).toBeDefined();
    });

    it('lança uma execessão de acesso negado quando alguem diferente do proprietário tenta adicionar uma planta', () => {
        const usuario2 = new Usuario("teste", "qualquer@email.com");
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        const tentaAdicionar = () => {
            colecao.adicionar(planta, usuario2);
        }
        expect(tentaAdicionar).toThrowError(AcessoNegado);
    });

    it('lança uma execessão de acesso negado quando alguem diferente do proprietário tenta remover uma planta', () => {
        const usuario2 = new Usuario("teste", "qualquer@email.com");
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        const tentaRemover = () => {
            colecao.remover(planta, usuario2);
        }
        expect(tentaRemover).toThrowError(AcessoNegado);
    });

});
