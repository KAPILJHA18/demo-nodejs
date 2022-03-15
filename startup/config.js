const config = require('config');

module.export = function(){
    if(!config.get(`jwtPrivateKey`)){
        throw new Error(`FATAL ERROR: jetPrivateKey is not defined`)
    }
}