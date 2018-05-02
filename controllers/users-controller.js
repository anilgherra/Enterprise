const okta = require('@okta/okta-sdk-nodejs');
const client = new okta.Client({
    orgUrl: 'https://dev-557331.oktapreview.com',    
    token: '0090gEZ3ZmLqSh9D4RL2v7tEy8sDLR4Tsi8FG8cDW-'    // Obtained from Developer Dashboard
});

module.exports = {
    createUser: function(req,res){
        const newUser = {
            profile: {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              login: req.body.email,
            },
            credentials: {
              password : {
                value: req.body.password
              }
            }
          };
          
          client.createUser(newUser)
          .then(user => {
            console.log('Created user', user);
            res.redirect('/')
          })
          .catch(error =>{
              console.log(error)
          })
    },
    getUser: function(){
        client.getUser('marcusjeremynorona@gmail.com')
        .then(user => {
            console.log(user)
        }).catch(error =>{
            console.log(error)
        })
    },
    deleteUser: function(email){
        client.getUser(email)
        .then(user => {
            user.deactivate()
            .then(() => console.log('User has been deactivated'))
            .then(() => user.delete())
            .then(() => console.log('User has been deleted'));
        }).catch(error =>{
            console.log(error)
        })
    }
}