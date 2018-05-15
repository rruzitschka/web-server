var middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('private route hit!');
        next();
    },
    logger: (req, res, next) => {
        
        let timeStamp = new Date().toString();
        console.log('Request:' + timeStamp +' '+ req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;