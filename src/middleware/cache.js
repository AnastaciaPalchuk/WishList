const RedisConnection = require("../infra/redis");


module.exports = async(ctx, next) => {
    
    const checkCache = await RedisConnection.query().get('list');
    if(checkCache){
        ctx.body = {cache: JSON.parse(checkCache)};
        ctx.status = 200;
        return;
    }
    else{
        return next();
    }
}