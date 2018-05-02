'use strict'


module.exports = (sequelize, DataTypes) => {
    var Departments = sequelize.define('departments', {
        dept_no: DataTypes.STRING,
        dept_name: DataTypes.STRING
    })
    return Departments;
}
