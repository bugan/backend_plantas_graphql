import { ColecaoDePlantas } from "./ColecaoDePlantas";
import { PlantaDeColecao } from "./PlantaDeColecao";

export class Usuario{

    private nome:string;
    private email: string;
    private colecaoDePlantas:ColecaoDePlantas;
    
    public get Colecao(){
        return this.colecaoDePlantas;
    }

    constructor(nome:string, email:string){
        this.emailEhValido(email)
        this.nome = nome;
        this.email = email;
    }

    public adicionarColecao(colecao:ColecaoDePlantas):void{
        this.verificaColecao();
        this.colecaoDePlantas = colecao;
    }

    public adicionarPlantaAColecao(planta:PlantaDeColecao):void{        
        this.colecaoDePlantas.adicionar(planta, this);
    }

    public removerPlantaDaColecao(planta:PlantaDeColecao):void{        
        this.colecaoDePlantas.remover(planta, this);
    }

    public criarColecao():void{
        this.verificaColecao();
        this.colecaoDePlantas = new ColecaoDePlantas(this);
    }

    private verificaColecao() {
        if (this.Colecao) {
            throw new ProriedadeJaDefinida("Propriedade [ColecaoDePlantas] já está definida e não pode ser reatribuida");
        }
    }

    emailEhValido(email:string){
        const regexp = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
        if(!regexp.test(email)){
            throw "Email invalido";
        }
    }
}

export class ProriedadeJaDefinida extends Error{}