'use strict'

module.exports = (sequelize, DataTypes) => {
    var Titles = sequelize.define('titles', {
        emp_no: DataTypes.INTEGER,
        title: DataTypes.STRING,
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    })
    return Titles;
}