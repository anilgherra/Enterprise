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

module.exports = router;
