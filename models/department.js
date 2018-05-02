'use strict'


module.exports = (sequelize, DataTypes) => {
    var Departments = sequelize.define('departments', {
        dept_no: {
            primaryKey: true,
            type:DataTypes.STRING
        },
        dept_name: DataTypes.STRING
    },
        {
            timestamps: false
        })
    return Departments;
}
