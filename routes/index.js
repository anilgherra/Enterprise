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
var manipulateDataController = require('../controllers/manipulateData-controller');

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

router.post('/name', oidc.ensureAuthenticated(), (req,res)=>{
    employeesController.getEmployeesByFirstAndLastName(req,res);
})

router.post('/addEmployee', oidc.ensureAuthenticated(), (req, res)=>{
    manipulateDataController.addEmployees(req,res);
})


router.get('/view_all', oidc.ensureAuthenticated(), (req,res) =>{
    employeesController.getAllEmployees(req, res);
})

router.get('/view_employee',  oidc.ensureAuthenticated(), (req,res) =>{
   res.render("view_employee");
})
router.get('/homepage', (req,res) =>{
    res.render("home");
})

router.get('/add_employee', (req,res)=>{
    res.render("add_employee")
})



router.post('/firstName', oidc.ensureAuthenticated(), (req,res)=> {
    employeesController.getEmployeesByFirstName(req,res);
})

router.post('/lastName', oidc.ensureAuthenticated(), (req,res)=> {
    employeesController.getEmployeesByLastName(req, res);
})

router.post('/gender', oidc.ensureAuthenticated(), (req, res)=> {
    employeesController.getEmployeesByGender(req, res);
})

router.post('/Manager_dept', oidc.ensureAuthenticated(), (req, res)=>{
    departmentController.depmartmentManagers(req, res);
})

router.get('/currentDepartments', oidc.ensureAuthenticated(), (req, res)=> {

    departmentController.currentDeparments(req, res);
})
router.get('/delete_employee', oidc.ensureAuthenticated(), (req, res)=> {
    res.render("delete_employee")
})

router.post('/addEmployee', (req, res) => {
    manipulateDataController.addEmployees(req, res);
})

router.post('/deleteEmployee', oidc.ensureAuthenticated(), (req, res)=>{
    manipulateDataController.deleteEmployee(req,res);
})

router.get('/general', oidc.ensureAuthenticated(), (req, res)=>{
    manipulateDataController.getGeneralInfo(req,res);
})

router.get('/logout', (req, res) => {
    console.log('logging out')
    req.logout();
    req.session.destroy();
    res.redirect('/');
})

router.get('/userInfo',oidc.ensureAuthenticated(), (req, res) => {
    res.send({user:req.userinfo});
})

module.exports = router;

