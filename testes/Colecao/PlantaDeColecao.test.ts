import { PlantaDeColecao } from "../../src/Usuarios/Entities/PlantaDeColecao";
import { Planta } from "../../src/Plantas/Entities/Planta";

describe("Uma Planta de coleção", () => {
    let plantaDeColecao:PlantaDeColecao;
    const planta = new Planta();
    beforeEach(() => {
        plantaDeColecao = new PlantaDeColecao(planta);
    });

    it("Tem uma referência a uma Planta", () => {
        expect(plantaDeColecao.Detalhes).toBeDefined();
    });

    it("Pode ser favoritada", () => {
        plantaDeColecao.favoritar(true);
        expect(plantaDeColecao.Favorita).toBeTruthy();
    });

    it("Pode ser desfavoritada", () => {
        plantaDeColecao.favoritar(false);
        expect(plantaDeColecao.Favorita).toBeFalsy();
    });
});
