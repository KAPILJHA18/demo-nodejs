const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({});

userSchema.method.genrateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, config.get('jwtPrivateKey'))    
    return token
}