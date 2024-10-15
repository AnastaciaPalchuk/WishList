const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();
const config = require("./config/index");
const DataBase = require("./infra/database");
const RedisConnection = require("./infra/redis");


const WishListRouter = require("./wishlist/wishListRouter");


async function main() {
  await DataBase.connect();
  RedisConnection.connect();
  const router = new Router();
  const app = new Koa();

  router.use('/wishlist', WishListRouter.routes(), WishListRouter.allowedMethods());

  app.use(cors());
  app.use(bodyParser());

  app.use(router.routes());
  app.listen(config.server.port, () => console.log(`Started on port ${config.server.port}`));
}
main();