const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER // corrigido de INERGER para INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: DataTypes.STRING
    },
    conteudo: {
        type: DataTypes.TEXT
    }
});

// Execução assíncrona para garantir a criação da tabela antes da inserção
async function inicializar() {
    try {
        await sequelize.sync({ force: true });
        console.log('Tabelas sincronizadas com sucesso.');

        await Postagem.create({
            titulo: 'Compra',
            conteudo: 'item 01'
        });
        console.log('Postagem criada com sucesso.');
    } catch (error) {
        console.error('Erro ao executar as operações:', error);
    }
}

inicializar();