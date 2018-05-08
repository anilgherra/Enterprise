var Sequelize = require('sequelize');
var sequelize = new Sequelize('Employees', 'employees', 'employees123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {

    addEmployees: function(req, res) {
        sequelize.query("insert into employees(:empNo, :birthDate, :firstName, :lastName, :gender, :hireDate) values(emp_no, birth_date, first_name, last_name, gender, hire_date);", {
            replacements: {empNo: req.body.empNo, birthDate: req.body.birthDate, firstName: req.body.firstName, lastName: req.body.lastName, gender:req.body.gender, hireDate: req.body.hireDate},  type: sequelize.QueryTypes.SELECT
        }).catch((err)=>{
            console.log(err);
        })
    }







}