'use strict'

module.exports = (sequelize, DataTypes) => {
    var Titles = sequelize.define('titles', {
        emp_no: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            primaryKey: true,
            type: DataTypes.STRING
        },
        from_date: {
          primaryKey: true,
          type:  DataTypes.DATE
        },
        to_date: DataTypes.DATE
    },
        {
            timestamps: false
        })
    return Titles;
}