const User = require('../model/user')

exports.createUser = function(){
   let newUser = new User({
       user:"juansolo",
       password:"juans"
   })
   newUser.save()
}