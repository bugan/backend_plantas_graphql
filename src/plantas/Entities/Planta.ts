import { Doenca } from "./Doenca";
import { Rega } from "./Rega";
import { Porte } from "./Porte";

export class Planta {
    private nome:string;
    private nomeCientifico:string;
    private descricao:string;
    private doencas:Array<Doenca>;
    private rega :Rega;
    private Ambiente:string;
    private Porte:Porte;


    public get Nome () {
        return this.nome;
    }

    public get Rega () {
        return this.rega;
    }

    public get Detalhes ():Object {
        return {
            Nome: this.nome,
            NomeCientifico: this.nomeCientifico,
            Descricao: this.descricao,
            Rega: this.rega
        };
    }

    constructor (nome:string) {
        this.nome = nome;
        this.rega = new Rega();
    }
}
