var express = require('express');
var router = express.Router();
var usersContoller = require('../controllers/users-controller.js')
const { ExpressOIDC } = require('@okta/oidc-middleware');
const oidc = new ExpressOIDC({
  issuer: 'https://dev-557331.oktapreview.com/oauth2/default',
  client_id: '0oaevnh1ydLMZjazH0h7',
  client_secret: 'yg2bOjNvUh0vV9HvL2JcoUHZlTmjJacrLs0Ros9l',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile'
});
var employeesController = require('../controllers/employees-controller');
var departmentController = require('../controllers/department-Controller');

/* GET home page. */
router.get('/', oidc.ensureAuthenticated(),(req, res) => {
  if (req.userinfo) {
      console.log(req.userinfo)
      usersContoller.getUser()

      res.render('index', {user: req.userinfo.name})
  //   res.send(`Hi ${req.userinfo.name}!`);
  } else {
    res.send('Not logged in!');
  }
})

router.get('/signup_form', (req,res) => {
  res.render('signup')
})

router.post('/signup_submit', (req,res)=> {
  usersContoller.createUser(req,res)
})

// router.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
//   res.send(JSON.stringify(req.userinfo));
// });

router.post('/getEmployee', (req,res) => {
    console.log(req.body.id)

    employeesController.getEmployeesById(req, res);
})

router.post('/name', (req,res)=>{
    employeesController.getEmployeesByFirstAndLastName(req,res);
})


router.get('/test', (req,res)=>{
    res.render("index")
})


router.post('/firstName', (req,res)=> {
    employeesController.getEmployeesByFirstName(req,res);
})

router.post('/lastName', (req,res)=> {
    employeesController.getEmployeesByLastName(req, res);
})

router.post('/gender', (req, res)=> {
    employeesController.getEmployeesByGender(req, res);
})

router.post('/EmployeeDept', (req, res)=>{
    departmentController.employeesByDepartment(req, res);
})

router.post('/currentDepartments', (req, res)=> {
    departmentController.currentDeparments(req, res);
})

module.exports = router;

