import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'postgres',
  password: '4loczn6v',
	define: {
    underscored: true
  }
})

