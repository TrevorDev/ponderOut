var database = require('./../lib/database');
var sequelize = require('sequelize');
var si = database.getSequelizeInstance();

var Node = si.define('Node', 
	{
	  text: sequelize.STRING(1024),
	  parent: sequelize.INTEGER,
	  rating: {type: sequelize.INTEGER, defaultValue: 0}
	}, {
		classMethods: {

		},
		instanceMethods: {

		}
	}
)

module.exports = Node;