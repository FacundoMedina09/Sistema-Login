import { Sequelize } from "sequelize";//Import sequealize para nuestra base de datos

//Creamos una constante con los valores de nuestra base de datos
const sequelize = new Sequelize('angulardb','root','root123',{
    host : 'localhost',
    dialect: 'mysql'
});

export default sequelize;