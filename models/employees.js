'use strict';

module.exports = (sequelize, DataTypes) => {
    var Employees = sequelize.define('Employees',{
        emp_no: {
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        birth_date: DataTypes.DATE,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: {
            type: DataTypes.ENUM,
            values: ['M', 'F']
        },
        hire_date: DataTypes.DATE

    },
        {
            timestamps: false
        })
    return Employees;
}