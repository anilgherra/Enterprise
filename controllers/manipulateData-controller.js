var Employees = require('../models/index').Employees;

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
            console.log(task)
        }).catch((err)=>{
            console.log(err);
        })
    },

    deleteEmployee: function(req, res) {
        Employees.find({
            where:{emp_no: req.body.id}

        }).then((employee) => {
            return employee.destroy();
        }).then(() => {
            console.log('Record Erased.')
        }).catch((err) => {
            console.log(err);
        })
    }







}