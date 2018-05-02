'use strict'

module.exports = (sequelize, DataTypes) => {
    var DepartmentEmployees = sequelize.define('dept_emp', {
        emp_no: {
            primarykey: true,
            type: DataTypes.INTEGER},
        dept_no: {
            primarykey: true,
            type: DataTypes.STRING
        },
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    },
        {
            freezeTableName: true,
            timestamps: false
        })
    return DepartmentEmployees
}