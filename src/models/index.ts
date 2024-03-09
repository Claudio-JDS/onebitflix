import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { Like } from './Like'
import { User } from './User'

Category.hasMany(Course, {as: 'courses'})

Course.belongsTo(Category)
Course.belongsToMany(User, {through: Favorite})
Course.belongsToMany(User, { through: Like })//*
Course.hasMany(Episode, { as: 'episodes' })
Course.hasMany(Favorite, {as:'FavoritesUsers', foreignKey: 'couse_id'})

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, {through: Favorite})
User.belongsToMany(Course, { through: Like })//*
User.hasMany(Favorite, {as:'FavoritesCouses', foreignKey: 'user_id'})



export {
  Course,
  Category,
  Episode,
  Favorite,
  User
}