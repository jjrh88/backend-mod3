const ctrlUser = {},
      User = require('../model/user'),
      bcrypt = require('bcrypt-nodejs')

ctrlUser.list = async(req, res) =>{
    const users = await User.find({})//.select("-password")
    res.json(users)
}

ctrlUser.findById = async(req, res) =>{
    const { _id } = req.params
    const user = await User.find({_id: _id })
    res.json(user)
}


ctrlUser.create = async(req, res) =>{
    const { user, password } = req.body
    const newUser = new User({
        user: user,
        password: password
    })
    await newUser.save()
    res.json({ status: true })
}

ctrlUser.update = async(req, res) =>{
    const { _id, user, password } = req.body
    /*await new Promise((resolve, reject) => {
        encrypt(password).then((pwdGenerated, err)=>{
            if(err) reject(err)
            resolve(pwdGenerated);
        })
    })
    .then((data) => { 
       User.findOneAndUpdate({ _id: _id }, { user: user, password: data }).exec()
       res.json({ status: true })
    })
   .catch(err =>{ 
       console.log("err ", err)
    })*/
   
    //User.findOneAndUpdate({ _id: _id }, { user: user, age: age })

    User.findOne({ _id: _id }, (err, response)=>{
      console.log( response )
      response.user = user
      response.password = password
      response.save()
    })
}

ctrlUser.delete = async (req, res) =>{
  const { _id } = req.params
  await User.findOneAndDelete({ _id: _id})
  res.json({ status: true })
}

const encrypt = async (pwd) =>{
    let resultPWD = ""
    await bcrypt.genSalt(10, (err , salt) => {
      bcrypt.hash(pwd, salt, null, (err, hash) =>{
       resultPWD = hash;
      })
    })
    return resultPWD;
}

module.exports = ctrlUser
      