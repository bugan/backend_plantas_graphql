import { PlantaDeColecao } from "./PlantaDeColecao";
import { Usuario } from "./Usuario";


export class ColecaoDePlantas {

    private plantasNaColecao: Array<PlantaDeColecao>;
    private usuario;

    public get QuantidadeDePlantas(): number {
        return this.plantasNaColecao.length;
    }

    public get Proprietario(): Usuario {
        return this.usuario;
    }


    constructor(usuario) {
        this.plantasNaColecao = [];
        this.usuario = usuario;
    }
    

    public adicionar(plantaDeColecao: PlantaDeColecao, mandante: Usuario) {
        this.verificaControleDeAcesso(mandante);
        this.plantasNaColecao.push(plantaDeColecao);
    }

    public remover(planta: PlantaDeColecao, mandante: Usuario) {
        this.verificaControleDeAcesso(mandante);
        if (this.plantaExisteNaColecao(planta)) {
            const index = this.bucarIndexDaPlanta(planta);
            this.plantasNaColecao.splice(index, 1);
        }
    }

    public favoritar(plantaDeColecao: PlantaDeColecao) {
        plantaDeColecao.favoritar(true)
    }

    public desvavoritar(plantaDeColecao: PlantaDeColecao) {
        plantaDeColecao.favoritar(false);
    }

    
    private plantaExisteNaColecao(plantaDeColecao: PlantaDeColecao): boolean {
        const index: number = this.bucarIndexDaPlanta(plantaDeColecao);
        return index != -1;
    }

    private bucarIndexDaPlanta(plantaDeColecao: PlantaDeColecao): number {
        return this.plantasNaColecao.indexOf(plantaDeColecao);
    }

    private verificaControleDeAcesso(mandante: Usuario) {
        if (mandante !== this.Proprietario) {
            throw new AcessoNegado("Acesso negado");
        }
    }

}

export class AcessoNegado extends Error { }