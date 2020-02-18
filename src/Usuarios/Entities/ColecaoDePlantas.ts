import { PlantaDeColecao } from "./PlantaDeColecao";
import { Usuario } from "./Usuario";


export class ColecaoDePlantas {
    private plantasNaColecao: Array<PlantaDeColecao>;
    private usuario;

    public get Tamanho (): number {
        return this.plantasNaColecao.length;
    }

    public get Proprietario (): Usuario {
        return this.usuario;
    }


    constructor (usuario) {
        this.plantasNaColecao = [];
        this.usuario = usuario;
    }


    public adicionar (plantaDeColecao: PlantaDeColecao, mandante: Usuario):void {
        this.verificaControleDeAcesso(mandante);
        this.plantasNaColecao.push(plantaDeColecao);
    }

    public remover (planta: PlantaDeColecao, mandante: Usuario):void {
        this.verificaControleDeAcesso(mandante);
        if (this.plantaExisteNaColecao(planta)) {
            this.removerPlanta(planta);
        }
    }

    public favoritar (plantaDeColecao: PlantaDeColecao) :void{
        plantaDeColecao.favoritar(true);
    }

    public desvavoritar (plantaDeColecao: PlantaDeColecao):void {
        plantaDeColecao.favoritar(false);
    }


    private removerPlanta (planta: PlantaDeColecao):void {
        const index = this.bucarIndexDaPlanta(planta);
        this.plantasNaColecao.splice(index, 1);
    }

    private plantaExisteNaColecao (plantaDeColecao: PlantaDeColecao): boolean {
        const index: number = this.bucarIndexDaPlanta(plantaDeColecao);
        return index !== -1;
    }

    private bucarIndexDaPlanta (plantaDeColecao: PlantaDeColecao): number {
        return this.plantasNaColecao.indexOf(plantaDeColecao);
    }

    private verificaControleDeAcesso (mandante: Usuario) {
        if (mandante !== this.Proprietario) {
            throw new AcessoNegado("Acesso negado");
        }
    }
}

export class AcessoNegado extends Error { }
