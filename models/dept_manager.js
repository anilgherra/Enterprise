'use strict'

module.exports = (sequelize, DataTypes) => {
    var DeptManger = sequelize.define('dept_manager',
    {
        dept_no: DataTypes.STRING,
        emp_no: DataTypes.INTEGER,
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    },
        {
            freezeTableName: true
        })
    return DeptManger;
}