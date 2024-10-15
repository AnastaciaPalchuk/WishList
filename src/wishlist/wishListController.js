const { WishListService } = require("./wishListService");
const DataBase = require("../infra/database");
const { WishListRepository } = require("./wishListRepository");
const { AlreadyExists } = require("./err/AlreadyExists");
const { NotFound } = require("./err/NotFound");
const redis = require("../infra/redis");


class WishListController {
  constructor(service) {
    this.service = service;
  }

  addToList = async (ctx) => {
    const item = ctx.request.body;
    // console.log(item.name)
    try {
      const addItemToList = await this.service.addToList(item.name);
      ctx.body = { id: addItemToList.rows[0].id };
    } catch (err) {
      if (err instanceof AlreadyExists) {
        ctx.status = 400;
        ctx.body = err.message;
        return;
      }
      throw err;
    }
  };

  deleteFromList = async (ctx) => {
    const item = ctx.request.body;
    try {
      const deleteItem = await this.service.deleteItem(item.id);
      ctx.body = { deleted: true };
    } catch (err) {
      if (err instanceof NotFound) {
        ctx.status = 404;
        ctx.body = err.message;
        return;
      }
    }
  };

  getWishList = async(ctx) => {
        const list = await this.service.getWishList();
        await redis.query().set("list", JSON.stringify(list.rows));
        ctx.body = { wishlist: list.rows };
  }

}

const repository = new WishListRepository(DataBase);
const service = new WishListService(repository);
module.exports = new WishListController(service);
