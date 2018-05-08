var Sequelize = require('sequelize');
var sequelize = new Sequelize('Employees', 'employees', 'employees123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = ({

    employeesByDepartment: function (req, res) {
        sequelize.query('select * from employees e, departments d, dept_emp dm where d.dept_name =' +':deptName' + 'and d.dept_no = dm.dept_no and dm.emp_no = e.emp_no;', {
            replacements: {deptName: req.body.deptName}, type: sequelize.QueryTypes.SELECT
        }).then((employees) =>{
            res.send({employee:employees});
            employees.forEach((e)=>{
                console.log(employees);
            })
        }).catch((err)=>{
            console.log(err);
        })
    },

    currentDeparments: function(req, res) {
        sequelize.query('select dept_name from departments').spread((result, metadata)=> {
            res.send({departments:result});
            result.forEach((r)=> {
                console.log(r.dept_name);
            })
        })
    },

    depmartmentManagers: function(req, res) {
        squelize.query('select * from employees e, departments d, dept_manager dm where d.dept_name =' +':deptName' + 'and d.dept_no = dm.dept_no and dm.emp_no = e.emp_no;', {
            replacements: {deptName: req.body.deptName}, type: sequelize.QueryTypes.SELECT
        }).then((manager)=>{
            res.send({manager:manager});
            manager.forEach((m)=>{
                console.log(m)
            }).catch((err)=>{
                console.log(err);
            })
        })
    }


})