var crypto = require('crypto');

module.exports = {
  email: 'tigerLBJ100910@gamil.com',
  title: 'TimTiger Blog',
  style: 'monokai'
};

var gravatarHash = crypto.createHash('md5').update(module.exports.email).digest('hex');
module.exports.gravatar = 'http://tp2.sinaimg.cn/1652806925/180/40002465070/1';
