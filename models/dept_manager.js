'use strict'

module.exports = (sequelize, DataTypes) => {
    var DeptManger = sequelize.define('dept_manager',
    {
        dept_no: {
            primaryKey: true,
            type:DataTypes.STRING
        },
        emp_no: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        from_date: DataTypes.DATE,
        to_date: DataTypes.DATE
    },
        {
            freezeTableName: true,
            timestamps: false
        })
    return DeptManger;
}