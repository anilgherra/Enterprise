'use strict'

module.exports = (sequelize, DataTypes) => {
    var DepartmentEmployees = sequelize.define('dept_emp', {
        emp_no: DataTypes.INTEGER,
        dept_no: DataTypes.STRING,
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    },
        {
            freezeTableName: true
        })
    return DepartmentEmployees
}