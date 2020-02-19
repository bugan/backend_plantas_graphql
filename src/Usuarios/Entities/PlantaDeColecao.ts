import { Planta } from "../../Plantas/Entities/Planta";

export class PlantaDeColecao {
    private favorita:boolean = false;
    private planta:Planta;

    public get Favorita (): boolean {
        return this.favorita;
    }

    public get Detalhes ():Planta {
        return this.planta;
    }

    constructor (planta:Planta) {
        this.planta = planta;
    }

    favoritar (status:boolean) {
        this.favorita = status;
    }
}
