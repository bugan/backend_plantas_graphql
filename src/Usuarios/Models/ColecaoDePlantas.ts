import { PlantaDeColecao } from "./PlantaDeColecao";


export class ColecaoDePlantas {
    
    private plantasNaColecao:Array<PlantaDeColecao>;

    get quantidadeDePlantas():number{   
         return this.plantasNaColecao.length;
    }   

    constructor(){
        this.plantasNaColecao = [];
    }

    adicionar(plantaDeColecao:PlantaDeColecao) {
        this.plantasNaColecao.push(plantaDeColecao);
    }

    remover(plantaDeColecao:PlantaDeColecao){
        const index:number = this.plantasNaColecao.indexOf(plantaDeColecao);
        if(index != -1){
           this.plantasNaColecao.splice(index, 1);
        }
    }

    

    favoritar(plantaDeColecao:PlantaDeColecao){
        plantaDeColecao.favoritar(true)
    }

    desvavoritar(plantaDeColecao:PlantaDeColecao){
        plantaDeColecao.favoritar(false);
    }
}
