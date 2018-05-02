'use strict'

module.exports = (sequelize, DataTypes) => {
    var Salaries = sequelize.define('salaries', {
        emp_no: DataTypes.INTEGER,
        salary: DataTypes.INTEGER,
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    })
    return Salaries;
}