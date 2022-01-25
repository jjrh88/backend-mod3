const ctrlUser = {}
      User = require('../model/user')

ctrlUser.list = async(req, res) =>{
    const users = await User.find({})
    res.json(users)
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
module.exports = ctrlUser
      