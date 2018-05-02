'use strict';

module.exports = (sequelize, DataTypes) => {
    var Employees = sequelize.define('Employees',{
        emp_no: DataTypes.INTEGER,
        birth_date: DataTypes.DATE,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        sex: {
            type: DataTypes.ENUM,
            values: ['M', 'F']
        },
        hire_date: DataTypes.DATE


    })
    return Employees;
}