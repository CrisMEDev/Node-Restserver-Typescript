
import { Sequelize } from 'sequelize';

const db = new Sequelize('restservernode', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

export default db;


