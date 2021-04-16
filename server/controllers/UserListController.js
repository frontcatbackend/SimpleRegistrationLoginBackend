const {User} = require('../models/UserModel')


class UserListController {
    async getAll(req,res){
        const users = await User.findAndCountAll()
        return res.json(users)
    }
}

module.exports = new UserListController()