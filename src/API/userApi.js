const db = require("../database/models")

module.exports = {

    getUserList: (req, res) => {
        db.Users.findAndCountAll()
        
            .then((users)=>{
                return res.json({
                    count : users.length,
                    users : users.map(function(user){
                        return {
                            id: user.id,
                            email:user.email,
                            name: user.first_name,
                            detail: "http://localhost:3050/users/profile/" + user.id
                        }
                    })
                });
                
            }).catch((error)=>{
                return res.send(error)
            })
    },
    getUserDetail: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then((user)=>{
                return res.json({
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    avatar: "http://localhost:3050/images/users/" + user.avatar,
                    })

            }).catch((error)=>{
                return res.send(error)
            })
    }
    

}