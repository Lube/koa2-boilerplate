require("babel-register");
import { sequelize } from './models'

sequelize.sync({ force: force })
