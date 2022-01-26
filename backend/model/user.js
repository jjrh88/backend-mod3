const mongoose = require('mongoose') //libria u orm para conectarnos con mongodb y hacer consultas,
      bcrypt = require('bcrypt-nodejs') //lib para encriptación

//definición del esquema
const UserSchema = new mongoose.Schema
({
    user: { type: String, lowercase: true }, //ejemplo: JAVIERSITO => javiersito
    password: String
})
//funcion pre que se ejecuta antes de que registre un usuario 
UserSchema.pre('save' , function( next )
{
   let user = this
   if( !user.isModified('password')) 
     return next()
    
   bcrypt.genSalt(10, (err , salt) => 
   {
       if(err) return next(err)
        bcrypt.hash(user.password, salt, null, (err, hash) => 
       {
           if(err) return next(err)

           user.password = hash
           next()
       })
   })
})

module.exports =  mongoose.model('user', UserSchema )