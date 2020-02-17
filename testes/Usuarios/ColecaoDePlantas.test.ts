import { ColecaoDePlantas } from "../../src/Usuarios/Models/ColecaoDePlantas";
import { PlantaDeColecao } from "../../src/Usuarios/Models/PlantaDeColecao";


describe('Uma ColecaoDePlantas', () => {
    it('adiciona uma plantaDecoleção na sua lista', () => {
        const colecao = new ColecaoDePlantas();
        colecao.adicionar(new PlantaDeColecao());
        expect(colecao.quantidadeDePlantas).toBe(1);
    });

    it('remove uma plantaDeColecao existente na sua lista', () => {
        const colecao = new ColecaoDePlantas();
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        colecao.adicionar(planta);
        colecao.remover(planta);
        expect(colecao.quantidadeDePlantas).toBe(0);
    });

    it('não deve remover uma planta que não existe de sua lista', () => {
        const colecao = new ColecaoDePlantas();
        const planta:PlantaDeColecao =  new PlantaDeColecao();
        const planta1:PlantaDeColecao =  new PlantaDeColecao();
        colecao.adicionar(planta1);
        colecao.remover(planta);

        expect(colecao.quantidadeDePlantas).toBe(1);
        
    });

});