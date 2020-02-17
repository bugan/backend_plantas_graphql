import { ColecaoDePlantas } from "./ColecaoDePlantas";
import { PlantaDeColecao } from "./PlantaDeColecao";

export class Usuario{

    nome:string;
    email: string;
    colecaoDePlantas:ColecaoDePlantas;
    

    constructor(nome:string, email:string){
        this.emailEhValido(email)
        this.nome = nome;
        this.email = email;
        this.colecaoDePlantas = new ColecaoDePlantas();
    }

    adicionarPlantaAColecao(planta:PlantaDeColecao){
        this.colecaoDePlantas.adicionar(planta);
    }

    emailEhValido(email:string){
        const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
        if(!regexp.test(email)){
            throw "Email invalido";
        }
    }
}
