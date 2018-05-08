var Employees = require('../models/index').Employees;


module.exports = {

    getAllEmployees: function(req, res) {
        Employees.findAll({ limit:500

        }).then((employee)=>{
            res.render('view_all', {employee:employee})
            employee.forEach((e)=>{
                console.log(e.dataValues);
            })
        })
    },


    getEmployeesById: function (req, res) {

        Employees.find({
            where: {emp_no: req.body.id},
        }).then((employee) => {
            var message3 = "Employee does not exist, Please try again."
            var message2 = "Found a match."

            if(employee){

                return res.render('view_employee1',{employee: employee, message: false})
            }
           return  res.render('view_employee1',{message: true, message1: message3})


        }).catch((err) => {
            console.log(err);
        });
    },

    getEmployeesByFirstAndLastName: function (req, res) {
        Employees.findAll({
            where: {first_name: req.body.firstName, last_name: req.body.lastName}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            })
        }).catch((err) => {
            console.log(err);
        })

    },

     getEmployeesByFirstName: function (req, res) {
        Employees.findAll({
            where: {first_name: req.body.firstName}
        }).then((employee) => {
            res.send({employee:employee});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    },

    getEmployeesByLastName: function (req, res) {
        Employees.findAll({
            where: {last_name: req.body.lastName}
        }).then((employee) => {
            res.send({employee:employee});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    },

    getEmployeesByGender: function (req, res) {
        Employees.findAll({
            where: {gender: req.body.gender,}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    }
}
