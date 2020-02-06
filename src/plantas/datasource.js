const {
    DataSource
} = require('apollo-datasource');


class plantasDS extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
    }
    
    plantasBD = [{
            id: 1,
            nome: "planta 1",
            luminosidade: "POUCA_LUZ",
            frutifera: false,
            nomeCientifico: "nao sei"
        },
        {
            id: 2,
            nome: "planta 2",
            luminosidade: "SOMBRA",
            frutifera: true,
            nomeCientifico: "nao sei"
        }
    ]

    listar = () => {
        return this.plantasBD;
    }

    buscar = (id) => {
        return this.plantasBD.filter(planta => planta.id == id)[0];
    }
}
module.exports = plantasDS