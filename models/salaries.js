'use strict'

module.exports = (sequelize, DataTypes) => {
    var Salaries = sequelize.define('salaries', {
        emp_no: {
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        salary: DataTypes.INTEGER,
        from_date: {
            primaryKey: true,
            type:DataTypes.DATE
        },
        to_date: DataTypes.DATE
    },
        {
            timestamps: false
        })
    return Salaries;
}