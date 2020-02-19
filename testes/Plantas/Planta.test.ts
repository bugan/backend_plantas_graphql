import { Planta } from "../../src/Plantas/Entities/Planta";
import { Rega } from "../../src/Plantas/Entities/Rega";

describe("Uma Planta", () => {
    let planta;
    const nome = "orquidea";
    beforeEach(() => {
        planta = new Planta(nome);
    });
    it("retorna seus detalhes quando for solicitado ", () => {
        expect(planta.Detalhes).toBeDefined();
    });

    it("Não permite que seus detalhes sejam alterados diretamente", () => {
        const detalhes = planta.Detalhes;
        const rega = new Rega();
        detalhes.rega = rega;
        expect(planta.Rega).not.toBe(rega);
    });
});
