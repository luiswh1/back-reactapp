import Sequelize from 'sequelize';
import config from '../config/database';
import Comentario from '../app/models/Comentario'
import Contato from '../app/models/Contato';

const models = [
  Comentario,
  Contato
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

export default new Database();