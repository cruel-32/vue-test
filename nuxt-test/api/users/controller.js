const userModel = require('../../model/users');

const getUsers = (req, res, next) =>{
    console.log('req.query : ', req.query);
    userModel.find().then(users=>{
        res.json(users)
    }).catch(e=>{
        res.json({
            "data" : [
                {name:'csh'},
                {name:'sej'},
                {name:'koongsil'},
            ]
        });
    })
}

const createUser = (req, res, next)=>{
    userModel.create({
        email : query.email,
        name : query.name,
        auth : 5,
        confirm : 'N',
        level : 1,
        joinDate : new Date(),
        deleted : 'N',
        _page_ : '',
    })
}

module.exports = {
    getUsers,
    createUser
};