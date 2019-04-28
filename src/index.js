module.exports = process.env.REACT_APP_LAUNCH_WWW ? require('./www/js') : require('./api')
