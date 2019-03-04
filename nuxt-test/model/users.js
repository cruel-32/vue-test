const mongoose = require('mongoose'); //

const userSchema = new mongoose.Schema({
        email : {
            type: String,
            match : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            required: [true, '이메일주소가 필요합니다'],
            unique:true,
            trim:true
        },
        name : {
            type : String,
            match : /^[A-Za-z0-9가-힣\-_$]{2,12}$/,
            required: [true, '특수문자를 제외한 2~12자가 필요합니다 ($,_,-,는 허용)'],
            unique:true,
            trim:true
        },
        auth : { type: Number, required: true, unique: false },
        confirm : { type: String, required: true, unique: false },
        level : { type: Number, required: true, unique: false },
        joinDate : { type: Date, required: true, unique: false },
        deleted : { type: String, required: true, unique: false },
        _email_ : { type: String, required: false, unique: false },
        _key_ : { type: String, required: true, unique: false },
        _salt_ : { type: String, required: true, unique: false },
        _page_ : { type: String, required: false, unique: false },
        social : {
            required: false, unique: false,
            naver : {
                id : { type: String, required: false, unique: false },
                accessToken : { type: String, required: false, unique: false },
            },
            facebook : {
                id : { type: String, required: false, unique: false },
                accessToken : { type: String, required: false, unique: false },
            },
            google : {
                id : { type: String, required: false, unique: false },
                accessToken : { type: String, required: false, unique: false },
            },
            kakao : {
                id : { type: String, required: false, unique: false },
                accessToken : { type: String, required: false, unique: false },
            },
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);
