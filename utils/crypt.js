const crypto = require('crypto')

const secret_key = 'Abc123++'

function md5(content){
    let md5= crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

function genPassword(password){
    const str = `password=${password}&key=${secret_key}`
    return md5(str)
}

module.exports = {
    genPassword
}