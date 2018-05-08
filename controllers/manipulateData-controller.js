var Employees = require('../models/index').Employees;
var Salaries = require('../models/index').salaries;
var sequelize = require('sequelize');
module.exports = {

    addEmployees: function(req, res) {
        Employees.create({
           emp_no: req.body.empNo,
           birth_date: req.body.birthDate,
           first_name: req.body.firstName,
           last_name: req.body.lastName,
           gender: req.body.gender,
           hire_date: req.body.hireDate
        }).then((task)=>{
            console.log(task);
            res.redirect('/')
        }).catch((err)=>{
            console.log(err);
        })
    },

    deleteEmployee: function(req, res) {
        Employees.find({
            where:{emp_no: req.body.id}

        }).then((employee) => {
            var obj = employee.toJSON();
            var message = "Deleted below employee."
            return employee.destroy();
        }).then((obj) => {
            res.render("verify_delete", {obj})
        }).catch((err) => {
            console.log(err);
        })
    },

    getGeneralInfo: function(req, res) {
            Employees.find({
                attributes: [[sequelize.fn('Count', sequelize.col('emp_no')), 'total']]
            }).then((employee)=>{
                //add res.render here
            }).catch((err)=>{
                console.log(err);
            })
    }







}