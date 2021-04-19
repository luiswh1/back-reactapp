"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Contato extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            id: {
                type: _sequelize2.default.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: _sequelize2.default.STRING(100),
                allowNull: false
            },
            email: {
                type: _sequelize2.default.STRING(100),
                allowNull: false
            },
            telefone: {
                type: _sequelize2.default.STRING(100),
                allowNull: false
            },
            created_at: {
                type: _sequelize2.default.DATE,
                allowNull: false
            },
        }, {
            sequelize,
            schema: 'curriculo',
            tableName: 'contatos'
        });

        return this;
    }
}

exports. default = Contato;